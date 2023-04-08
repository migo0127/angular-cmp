import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SideNavList } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor(
    private http: HttpClient,
  ) { }

  getSideNavList(): Observable<SideNavList[]> {
    return this.http.get<SideNavList[]>('assets/mock-data/side-nav-mock.json').pipe(
      map((list: any) => list.sideNav)
    );
  }

}
