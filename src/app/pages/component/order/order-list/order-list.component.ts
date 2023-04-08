import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { OPERATOR, OrderItemRange, PeriodicElement} from 'src/app/model';
import { OrderService } from 'src/app/service/order/order.service';
import { MaterialDialogComponent } from 'src/app/share/component/dialog/dialog.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchForm: FormGroup;
  originDataSource: PeriodicElement[];
  dataSource:  MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['category', 'product', 'price', 'saleQty', 'total'];
  pageSizeOptions: number[] = [5, 10];
  categoryList: string[];
  productList: string[];
  areaRange: OrderItemRange;

  get categoryControl(): AbstractControl<string> {
    return this.searchForm.get('category') as AbstractControl;
  }

  get productControl(): AbstractControl<string> {
    return this.searchForm.get('product') as AbstractControl;
  }

  get priceControl(): AbstractControl<string> {
    return this.searchForm.get('price') as AbstractControl;
  }

  get saleQtyControl(): AbstractControl<string> {
    return this.searchForm.get('saleQty') as AbstractControl;
  }

  get totalControl(): AbstractControl<string> {
    return this.searchForm.get('total') as AbstractControl;
  }

  get operatorControl(): AbstractControl<string> {
    return this.searchForm.get('operator') as AbstractControl;
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private orderService: OrderService,
  ) {
    this.searchForm = this.fb.group({
      category: [''],
      product: [''],
      price: [''],
      saleQty: [''],
      total: [''],
      operator: ['1']
    });
  }

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe((list: PeriodicElement[]) => {
      this.originDataSource = JSON.parse(JSON.stringify(list));
      this.getItemMinMaxRange(list);
      this.categoryList = this.getOptionList(list ,'category');
      this.productList = this.getOptionList(list ,'product');
      this.createMatTableDataSource(list);
      this.bindFormValueChanges();
    });
  }

  // Material table: 若要使用 sort 或 paginator，需要將 data 轉換為 MatTableDataSource
  createMatTableDataSource(list: PeriodicElement[]): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // 獲取 Category 及 Product 的 select 選項
  getOptionList(list: PeriodicElement[], itemName: keyof PeriodicElement): string[] {
    const set: Set<string> = new Set();
    for(let item of list){
      set.add(item[itemName] as string);
    }
    const items = Array.from(set).sort();
    return items;
  }

  // 獲取 Price、SaleQty、Total 的最大值與最小值
  getItemMinMaxRange(list: PeriodicElement[]): void {
    const copyList: PeriodicElement[] = JSON.parse(JSON.stringify(list));
    const sortedByPrice = copyList.slice().sort((a, b) => (+a.price) - (+b.price));
    const sortedBySaleQty = copyList.slice().sort((a, b) => (+a.saleQty) - (+b.saleQty));
    const sortedByTotal = copyList.slice().sort((a, b) => (+a.total) - (+b.total));

    this.areaRange = {
      priceMin: +sortedByPrice[0]?.price ?? 0,
      priceMax: +sortedByPrice[sortedByPrice.length - 1]?.price ?? 0,
      saleQtyMin: +sortedBySaleQty[0]?.saleQty ?? 0,
      saleQtyMax: +sortedBySaleQty[sortedBySaleQty.length - 1]?.saleQty ?? 0,
      totalMin: +sortedByTotal[0]?.total ?? 0,
      totalMax: +sortedByTotal[sortedByTotal.length - 1]?.total ?? 0,
    }

    this.totalControl.patchValue(this.areaRange.totalMin.toString(), { emitEvent: false });
  }

  // 偵測每一個 formControl 的 valueChanges
  // 因有設定 500 毫秒且值不一樣才會執行搜索，所以 priceArea 及 SaleQtyArea 會有 500毫秒內輸入非數字時顯示的問題
  bindFormValueChanges(): void {
    Object.keys(this.searchForm.controls).forEach((controlName: string) => {
      const control: AbstractControl<string> = this.searchForm.get(controlName) as AbstractControl;
      control.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
      ).subscribe((value: string) => {
        // price formControl 與 saleQty formControl 需要先驗證輸入值是否為數字
        if(controlName === 'price' || controlName === 'saleQty'){
          control.patchValue(this.detectNumber(value), { emitEvent: false });
          // if(this.detectNumber(value) === '') return;
        }
        this.searchData();
      });
    });
  }

  // 驗證值是否為數字
  detectNumber(value: string): string {
    const newValue: string = value?.trim().replace(/[^\d]*/g, '');
    return newValue;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  // 清除所有選擇的值，重置為初始化
  clearSearch(): void {
    this.categoryControl.patchValue('', { emitEvent: false });
    this.productControl.patchValue('', { emitEvent: false });
    this.priceControl.patchValue('', { emitEvent: false });
    this.saleQtyControl.patchValue('', { emitEvent: false });
    this.totalControl.patchValue(this.areaRange.totalMin.toString(), { emitEvent: false });
    this.operatorControl.patchValue('1', { emitEvent: false });
    this.searchData();
  }

  // 搜索符合條件的 tableData
  searchData(): void {
    let filterCategoryData: PeriodicElement[] = this.originDataSource.filter(item => item.category === this.categoryControl.value);
    filterCategoryData = filterCategoryData.length ? filterCategoryData : this.originDataSource;

    this.productList = this.getOptionList(filterCategoryData ,'product');
    let filterProductData: PeriodicElement[] = filterCategoryData.filter(item => this.productControl.value.includes(item.product));
    filterProductData = filterProductData.length ? filterProductData : filterCategoryData;

    const operator: number = +this.operatorControl.value;
    const priceValue: number = +this.priceControl.value;
    const saleQtyValue: number = +this.saleQtyControl.value;
    const totalValue: number = +this.totalControl.value;

    let filterPriceAreaData: PeriodicElement[] = filterProductData;
    if(priceValue){
      filterPriceAreaData = filterProductData.filter(item => operator === OPERATOR.LESS ? +item.price < priceValue : operator === OPERATOR.MORE ? +item.price > priceValue : +item.price === priceValue);
    }

    let filterSaleQtyData: PeriodicElement[] = filterPriceAreaData;
    if(saleQtyValue){
      filterSaleQtyData = filterPriceAreaData.filter(item => operator === OPERATOR.LESS ? +item.saleQty < saleQtyValue : operator === OPERATOR.MORE ? +item.saleQty > saleQtyValue : +item.saleQty === saleQtyValue);
    }

    let filterTotalData: PeriodicElement[] = filterSaleQtyData;
    if(totalValue){
      filterTotalData = filterSaleQtyData.filter(item => operator === OPERATOR.LESS ? +item.total < totalValue : operator === OPERATOR.MORE ? +item.total > totalValue : +item.total === totalValue);
    }

    // 最終符合的 tableData 需要再重新轉為 MatTableDataSource 型別
    this.createMatTableDataSource(filterTotalData);
  }

  onClickPrice(row: PeriodicElement): void {

  }

}
