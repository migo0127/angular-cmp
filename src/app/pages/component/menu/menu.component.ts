import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/model';
import { LoginService, UserInfoService } from 'src/app/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logoUrl: string = '../../../assets/img/logo-1.png';
  userInfo: UserInfo;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserInfoService,
  ) {}

  ngOnInit(): void {
    this.userInfo = this.userInfoService.userInfo;
  }

  onClickLogo(): void {
    this.router.navigate(['/pages/home']);
  }

  onLogout(): void {
    this.loginService.logout();
  }
}
