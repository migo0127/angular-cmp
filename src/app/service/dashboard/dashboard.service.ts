import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) {}

  getAllChartData(): Observable<any> {
    return this.http.get('assets/mock-data/chart-data-mock.json');
  }

}
