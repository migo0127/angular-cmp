import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoService,  } from 'src/app/service';
import Chart, { ChartData } from 'chart.js/auto';
import { CHARTJSTYPE } from 'src/app/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  barChartConfig: any;

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    console.log([this.authService.isLoggedIn, this.userInfoService.userInfo]);
    this.initChat();
  }


  ngAfterViewInit(): void {

  }

  initChat(): void{
    this.barChartConfig = {
      type: 'bar',
      data : {
        labels: ['一月', '二月', '三月'],
        datasets: [{
          label: '銷售業績(百萬)',
          data: [60, 49, 72]
        }]
      },
      options: {
        aspectRatio: 0
      }
    }
  }

}
