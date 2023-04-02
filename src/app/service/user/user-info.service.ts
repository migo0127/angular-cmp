import { Injectable } from "@angular/core";
import { UserInfo, YNFlag } from "src/app/model";
import { UserService } from "..";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private _userInfo: UserInfo;

  constructor(
    private userService: UserService,
  ){
    const isLogin: boolean = sessionStorage.getItem('isLoggedIn') === YNFlag.Y;
    const userInfo: any = sessionStorage.getItem('userInfo');
    if(isLogin && userInfo){
      this.userInfo = JSON.parse(userInfo) as UserInfo;
    }
   }

  get userInfo(): UserInfo {
    return this._userInfo;
  }

  set userInfo(userInfo: UserInfo) {
    this._userInfo = userInfo;
  }

  getUserInfoData(): void {
    this.userService.getUserInfoMock().subscribe((userInfo: UserInfo) => {
      this.userInfo = userInfo;
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    });
  }

}
