import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CHARTJSTYPE, CostData, MarketingData, ProductDashboard } from 'src/app/model';
import { DashboardService, ChartOptionsUtilService } from 'src/app/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  costData: CostData[];

  marketingData: MarketingData;
  doughnutChartType: ChartType;
  doughnutChartData: ChartData;
  doughnutChartOptions: ChartConfiguration['options'];

  // mixedChartType: ChartType;
  // mixedChartData: ChartData;
  // mixedChartOptions: ChartConfiguration['options'];

  lineChartType: ChartType;
  lineChartData: ChartConfiguration['data'];
  lineChartOptions: ChartConfiguration['options'];

  // barChartData: ChartData;
  // barChartType: ChartType;
  // barChartOptions: ChartConfiguration['options'];

  // pieChartType: ChartType;
  // pieChartData: ChartData;
  // pieChartOptions: ChartConfiguration['options'];

  tableData: MatTableDataSource<ProductDashboard>;
  displayedTableColumns: string[] = ['index', 'name', 'price', 'qty', 'total'];

  constructor(
    private dashboardService: DashboardService,
    private chartOptionsUtilService: ChartOptionsUtilService,
  ) {  }

  ngOnInit(): void {
    this.initCostData();
    this.initMarketingData();
    this.initChartData();
    this.initTableData();
  }

  initCostData(): void {
    this.dashboardService.getCostData().subscribe((data: CostData[]) => {
      this.costData = data;
    })
  }

  initMarketingData(): void {
    this.dashboardService.getMarketingData().subscribe((data: MarketingData) => {
      this.marketingData = data;
    })
  }

  initChartData(): void {
    this.dashboardService.getAllChartData().subscribe((data: any) => {
      if(data['doughnutChartData']){
        this.doughnutChartType = CHARTJSTYPE.DOUGHNUT;
        this.doughnutChartData = data['doughnutChartData'];
        const options: any = this.chartOptionsUtilService.getBaseDoughnutChartOptions();
        options.plugins.title = {
          display: true,
          text: 'Service Expenses',
          font: {
            size: 18,
            weight: 'normal'
          }
        }
        options.plugins.legend.display = false;
        this.doughnutChartOptions = options;
      }
      if(data['mixedChartData']){
        // this.mixedChartType = CHARTJSTYPE.BAR;
        // this.mixedChartData = data['mixedChartData'];
        // const options: any = this.ChartOptionsUtilService.getBaseBarChartOptions();
        // options.plugins.title = {
        //   display: true,
        //   text: 'test',
        //   font: {
        //     size: 18,
        //     weight: 'normal'
        //   }
        // }
        // // options.plugins.legend.position = 'bottom';
        // this.mixedChartOptions = options as ChartConfiguration['options'];
      }
      if(data['lineChartData']){
        this.lineChartType = CHARTJSTYPE.LINE;
        this.lineChartData = data['lineChartData'];
        const options: any = this.chartOptionsUtilService.getBaseLineChartOptions();
        options.plugins.title = {
          display: true,
          text: 'Average Usage Rate',
          font: {
            size: 18,
            weight: 'normal'
          }
        }
        this.lineChartOptions = options as ChartConfiguration['options'];
      }
      if(data['barChartData']){
        // this.barChartType = CHARTJSTYPE.BAR;
        // this.barChartData = data['barChartData'];
        // const options: any = this.ChartOptionsUtilService.getBaseBarChartOptions();
        // this.barChartOptions = options as ChartConfiguration['options'];
      }
      if(data['pieChartData']){
        // this.pieChartType = CHARTJSTYPE.PIE;
        // this.pieChartData = data['pieChartData'];
        // const options: any = this.ChartOptionsUtilService.getPieChartOptions();
        // options.plugins.legend.display = false;
        // this.pieChartOptions  = options as ChartConfiguration['options'];
      }
    });
  }

  initTableData(): void {
    this.dashboardService.getTableData().subscribe((data: ProductDashboard[]) => {
      this.tableData = new MatTableDataSource<ProductDashboard>(data);
      this.tableData.sort = this.sort;
    });
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
