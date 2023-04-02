import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logoUrl: string = '../../../assets/img/logo.png';

  constructor(
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {

  }


  onLogout(): void {
    this.loginService.logout();
  }
}
