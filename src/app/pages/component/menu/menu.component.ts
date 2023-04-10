import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/model';
import { LoginService, SideNavService, UserInfoService } from 'src/app/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('userInfoDialog') userInfoDialog: TemplateRef<any>;

  logoUrl: string = 'assets/img/logo-1.png';
  userInfo: UserInfo;
  userInfoDisplayedColumns: string[] = [
    'role', 'name', 'mail', 'github'
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private loginService: LoginService,
    private sideNavService: SideNavService,
    private userInfoService: UserInfoService,
  ) {}

  ngOnInit(): void {
    this.userInfo = this.userInfoService.userInfo;
  }

  onClickLogo(): void {
    this.router.navigate(['/pages/dashboard']);
  }

  showUserInfo(): void {
    this.dialog.open(this.userInfoDialog);
  }

  onLogout(): void {
    this.loginService.logout();
  }

  toggleSideNavVisible(): void {
    this.sideNavService.toggleSideNavVisible();
  }

}
