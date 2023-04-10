import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { SideNavList } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  isSideNavVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
  ) { }

  getSideNavList(): Observable<SideNavList[]> {
    return this.http.get<SideNavList[]>('assets/mock-data/side-nav-mock.json').pipe(
      map((list: any) => list.sideNav)
    );
  }

  toggleSideNavVisible(): void {
    this.isSideNavVisible$.next(!this.isSideNavVisible$.value);
  }

  getSideNavVisibility(): Observable<boolean> {
    return this.isSideNavVisible$.asObservable();
  }

}
