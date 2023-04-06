import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'];
  barChartType: ChartType;
  barChartData: ChartData;

  constructor() { }

  ngOnInit(): void {
    this.initBarChartData();
  }

  initBarChartData(): void {
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

    this.barChartType = 'bar';

    this.barChartData = {
      labels: [ '2023/01', '2023/02', '2023/03', '2023/04' ],
      datasets: [
        {
          data: [ 65, 59, 80, 81 ],
          label: '註冊人數',
          type: 'bar'
        },
        {
          data: [ 28, 48, 40, 19 ],
          label: '銷售額度',
          type: 'line'
        }
      ]
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
