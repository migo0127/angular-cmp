import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { PeriodicElement } from "src/app/model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient){ }

  getOrderList(): Observable<PeriodicElement[]>{
    return this.http.get('assets/mock-data/order-list-mock.json').pipe(
      map((list: any) => list.orderList)
    )
  }

}
