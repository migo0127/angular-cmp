import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

  getUserInfoMock(): Observable<UserInfo> {
    return this.http.get<UserInfo>('assets/mock-data/user-info-mock.json');
  }
}
