import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CostData, MarketingData } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) {}

  getCostData(): Observable<CostData[]>{
    return this.http.get<CostData[]>('assets/mock-data/dashboard-cost-mock.json').pipe(
      map((data: any) => data.costData)
    );
  }

  getMarketingData(): Observable<MarketingData>{
    return this.http.get<MarketingData>('assets/mock-data/dashboard-marketing-data-mock.json').pipe(
      map((data: any) => data.marketingData)
    );
  }

  getAllChartData(): Observable<any> {
    return this.http.get<any>('assets/mock-data/chart-data-mock.json');
  }

  getTableData(): Observable<any>{
    return this.http.get<any>('assets/mock-data/dashboard-table-data-mock.json').pipe(
      map((data: any) => data.tableData)
    );
  }

}
