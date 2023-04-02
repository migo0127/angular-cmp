import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoService,  } from 'src/app/service';


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

}
