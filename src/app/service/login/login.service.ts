import { Injectable } from "@angular/core";
import { LoginItem } from "../../model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _loginItem: LoginItem;

  constructor(
    private http: HttpClient
  ){

  }

  get loginItem(): LoginItem {
    return this._loginItem;
  }

  set loginItem(loginItem: LoginItem) {
    this._loginItem = loginItem;
  }

  getMockLoginData(): Observable<LoginItem>{
    return this.http.get<LoginItem>('assets/mock-data/account-mock.json');
  }

}
