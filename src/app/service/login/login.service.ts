import { Injectable } from "@angular/core";
import { LoginItem, YNFlag } from "../../model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "..";
import { Router } from "@angular/router";
import { UserInfoService } from "../user/user-info.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ){ }

  getMockLoginData(): Observable<LoginItem>{
    return this.http.get<LoginItem>('assets/mock-data/account-mock.json');
  }

  login(): void {
    this.authService._isLoggedIn$.next(true);
    sessionStorage.setItem('isLoggedIn', YNFlag.Y);
    this.getUserInfo();
  }

  logout(): void {
    this.clearSessionStorage();
    this.authService._isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  clearSessionStorage(): void {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userInfo');
  }

  getUserInfo(): void {
    this.userInfoService.getUserInfoData();
  }

}
