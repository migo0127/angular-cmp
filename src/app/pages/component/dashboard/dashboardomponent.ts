import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CHARTJSTYPE, ProductDashboard } from 'src/app/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartType: ChartType;
  barChartData: ChartData;
  barChartOptions: ChartConfiguration['options'];

  tableData: ProductDashboard[];
  displayedTableColumns: string[] = ['index', 'name', 'price', 'qty', 'total'];

  pieChartType: ChartType;
  pieChartData:  ChartData<'pie', number[], string | string[]>;
  pieChartOptions: ChartConfiguration['options'];

  constructor() {

  }

  ngOnInit(): void {
    this.initBarChartData();
    this.initTableData();
    this.initPieChartData();
  }

  initBarChartData(): void {
    this.barChartType = CHARTJSTYPE.BAR;

    this.barChartData = {
      labels: [ '2023/01', '2023/02', '2023/03', '2023/04' ],
      datasets: [
        {
          type: CHARTJSTYPE.BAR,
          data: [ 65, 59, 80, 81 ],
          label: '銷售額度(萬)',
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
          type: CHARTJSTYPE.LINE,
          data: [ 28, 48, 40, 19 ],
          label: '註冊人數(個)',
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)'

        }
      ]
    };

    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {},
        y: {
          min: 0,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    };

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

  initPieChartData(): void {
    this.pieChartType = CHARTJSTYPE.PIE;

    this.pieChartData = {
      labels: [ 'Bank','Credit Card', 'Line Pay', 'Jkp Pay', 'Cash' ],
      datasets: [ {
        data: [ 4, 43, 36, 15, 2]
      } ]
    };

    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'right',
        },
        datalabels: {
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    };

  }


  // events
  chartClicked(event: any): void {
    if(!event) return;
    // console.log(event);
  }

  chartHovered(event: any): void {
    if(!event) return;
    // console.log(event);
  }
}
