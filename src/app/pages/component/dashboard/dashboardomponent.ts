import { Component, OnInit } from '@angular/core';
import { CHARTJSTYPE } from 'src/app/model';
import { AuthService, UserInfoService,  } from 'src/app/service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
    this.barChartConfig = {
      type: CHARTJSTYPE.BAR,

      data: {
        labels: ['一月', '二月', '三月'],
        datasets: [{
          label: '銷售業績(百萬)',
          data: [60, 49, 72]
        }]
      },
      options: {
        maintainAspectRatio: 0,
      }
    }

    this.barChartConfig2 = {
      type: CHARTJSTYPE.BAR,
      data: {
        labels: ['四月', '五月', '六月'],
        datasets: [{
          label: '銷售業績(百萬)',
          data: [70, 59, 92]
        }]
      },
      options: {
        maintainAspectRatio: 0,
      }
    }
  }
}
