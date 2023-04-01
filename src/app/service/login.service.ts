import { Injectable } from "@angular/core";
import { LoginItem } from "../model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _loginItem: LoginItem;

  constructor(){

  }

  get loginItem(): LoginItem {
    return this._loginItem;
  }

  set loginItem(loginItem: LoginItem) {
    this._loginItem = loginItem;
  }

}
