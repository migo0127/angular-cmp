import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoService,  } from 'src/app/service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    console.log([this.authService.isLoggedIn, this.userInfoService.userInfo]);
  }

}
