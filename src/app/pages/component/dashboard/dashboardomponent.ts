import { Component, OnInit } from '@angular/core';
import { CHARTJSTYPE } from 'src/app/model';
import { AuthService, UserInfoService,  } from 'src/app/service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mixedChartCongif: any;
  barChartConfig: any;
  barChartConfig2: any;

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ) {

   }

  ngOnInit(): void {
    this.initChartData();
  }

  initChartData(): void {

    this.mixedChartCongif = {
      type: CHARTJSTYPE.BAR,
      data: {
        labels: ["2023/04/01", "", "2023/04/03", "", "2023/04/05", ""],
        datasets: [
          {
            type: "bar",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            label: "註冊數",
            data: [60, 49, 72, 90, 100, 60]
          },
          {
            type: "line",
            label: "銷售量",
            data: [25, 13, 30, 35, 25, 40],
            lineTension: 0, // 曲線的彎度，設 0 表示直線
            fill: true // 是否填滿色彩
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            id: 'first-y-axis',
            type: 'linear'
          }, {
            id: 'second-y-axis',
            type: 'linear'
          }]
        }
      }
    }
  }
}
