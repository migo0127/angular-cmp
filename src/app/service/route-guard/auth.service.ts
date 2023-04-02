import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLoggedIn$: BehaviorSubject<boolean>;
  _isLoggedIn: boolean;

  constructor() {
    const isLogin: boolean = sessionStorage.getItem('isLoggedIn') === 'Y';
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

  login(): void {
    sessionStorage.setItem('isLoggedIn', 'Y');
    this._isLoggedIn$.next(true);
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
    this._isLoggedIn$.next(false);
  }

}
