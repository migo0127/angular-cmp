import { Injectable } from "@angular/core";
import { LoginItem } from "../../model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ){

  }

  getMockLoginData(): Observable<LoginItem>{
    return this.http.get<LoginItem>('assets/mock-data/account-mock.json');
  }

}
