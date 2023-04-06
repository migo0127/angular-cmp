import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit{

  @Input('data') data: ChartData;
  @Input('options') options: ChartConfiguration['options'];
  @Input('type') type: ChartType;
  @Output() chartClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() chartHover: EventEmitter<any> = new EventEmitter<any>();

  plugins = [ DataLabelsPlugin ];

  constructor() {
  }

  ngOnInit(): void { }

   // events
   public chartClicked(event: any): void {
    this.chartClick.emit(event);
  }

  chartHovered(event: any): void {
    this.chartHover.emit(event);
  }
}
