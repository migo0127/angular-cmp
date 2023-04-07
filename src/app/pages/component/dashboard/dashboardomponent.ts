import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CHARTJSTYPE, ProductDashboard } from 'src/app/model';
import { DashboardService, DashboardUtilService } from 'src/app/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  mixedChartType: ChartType;
  mixedChartData: ChartData;
  mixedChartOptions: ChartConfiguration['options'];

  lineChartType: ChartType;
  lineChartData: ChartConfiguration['data'];
  lineChartOptions: ChartConfiguration['options'];
  barChartData: ChartData;

  barChartType: ChartType;
  barChartOptions: ChartConfiguration['options'];

  pieChartType: ChartType;
  pieChartData: ChartData;
  pieChartOptions: ChartConfiguration['options'];

  tableData: ProductDashboard[];
  displayedTableColumns: string[] = ['index', 'name', 'price', 'qty', 'total'];

  constructor(
    private dashboardService: DashboardService,
    private dashboardUtilService: DashboardUtilService,
  ) {  }

  ngOnInit(): void {
    this.initChartData();
    this.initTableData();
  }

  initChartData(): void {
    this.dashboardService.getAllChartData().subscribe((data: any) => {
      if(data['mixedChartData']){
        this.mixedChartType = 'bar';
        this.mixedChartData = data['mixedChartData'];
        const options: any = this.dashboardUtilService.getBaseBarChartOptions();
        options.plugins.title = {
          display: true,
          text: 'test',
          font: {
            size: 18,
            weight: 'normal'
          }
        }
        // options.plugins.legend.position = 'bottom';
        this.mixedChartOptions = options as ChartConfiguration['options'];
      }
      if(data['lineChartData']){
        this.lineChartType = 'line';
        this.lineChartData = data['lineChartData'];
        const options: any = this.dashboardUtilService.getBaseLineChartOptions();
        this.lineChartOptions = options as ChartConfiguration['options'];
      }
      if(data['barChartData']){
        this.barChartType = 'bar';
        this.barChartData = data['barChartData'];
        const options: any = this.dashboardUtilService.getBaseBarChartOptions();
        this.barChartOptions = options as ChartConfiguration['options'];
      }
      if(data['pieChartData']){
        this.pieChartType = 'pie';
        this.pieChartData = data['pieChartData'];
        const options: any = this.dashboardUtilService.getPieChartOptions();
        options.plugins.legend.position = 'right';
        this.pieChartOptions  = options as ChartConfiguration['options'];
      }
    });
  }

  initTableData(): void {
    this.tableData = [
      {
        index: 1,
        name: 'Keyboard',
        price: 65,
        qty: 101,
        total: 6565

      },
      {
        index: 2,
        name: 'Earphones',
        price: 55,
        qty: 92,
        total: 5060
      },
      {
        index: 3,
        name: 'Screen',
        price: 100,
        qty: 44,
        total: 4400
      },
      {
        index: 4,
        name: 'Mouse',
        price: 30,
        qty: 131,
        total: 3930
      },
      {
        index: 5,
        name: 'Audio',
        price: 60,
        qty: 51,
        total: 3060
      },
      {
        index: 6,
        name: 'Charging Cable',
        price: 6,
        qty: 431,
        total: 2586
      },
      {
        index: 7,
        name: 'Screen Protector',
        price: 3,
        qty: 631,
        total: 1893
      },
      {
        index: 8,
        name: 'Phone Holder',
        price: 12,
        qty: 100,
        total: 1200
      },
      {
        index: 9,
        name: 'Phone Case',
        price: 9,
        qty: 82,
        total: 738
      },
      {
        index: 10,
        name: 'Selfie Stick',
        price: 21,
        qty: 32,
        total: 672
      }
    ]
  }

  // events
  chartClicked(event: any, chartType: string): void {
    if(!event) return;
    // console.log([event, chartType]);
  }

  chartHovered(event: any, chartType: string): void {
    if(!event) return;
    // console.log([event, chartType]);
  }
}
