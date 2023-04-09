import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-payment',
  templateUrl: './analysis-payment.component.html',
  styleUrls: ['./analysis-payment.component.scss']
})
export class AnalysisPaymentComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void { }

  dateChange(e: any): void {
    console.log(e);

  }

}
