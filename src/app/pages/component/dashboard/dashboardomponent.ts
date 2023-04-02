import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoService,  } from 'src/app/service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    console.log([this.authService.isLoggedIn, this.userInfoService.userInfo]);
  }

  ngAfterViewInit(): void {
    const ctx: HTMLCanvasElement | null = document.getElementById('myChart') as HTMLCanvasElement;
    if(!ctx) return;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['一月', '二月', '三月'],
        datasets: [{
          label: '銷售業績(百萬)',
          data: [60, 49, 72]
        }]
      },
      options: {
        aspectRatio: 0
      }
    });
  }

}
