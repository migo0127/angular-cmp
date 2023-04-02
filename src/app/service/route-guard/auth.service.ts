import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { YNFlag } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLoggedIn$: BehaviorSubject<boolean>;
  private _isLoggedIn: boolean;

  constructor() {
    const isLogin: boolean = sessionStorage.getItem('isLoggedIn') === YNFlag.Y;
    this._isLoggedIn$ = new BehaviorSubject<boolean>(isLogin);
    this._isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this._isLoggedIn = isLoggedIn;
    })
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  get isLoggedIn(): boolean {
   return this._isLoggedIn;
  }

}
