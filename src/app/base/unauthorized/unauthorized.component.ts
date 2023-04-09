import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginService } from 'src/app/service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['/pages/dashboard']);
    }else{
      this.loginService.clearSessionStorage();
      this.router.navigate(['/login']);
    }
  }

}
