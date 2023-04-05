import { AfterViewInit, Component, Input } from '@angular/core';
import { BarController, Chart, ChartType, ChartTypeRegistry } from 'chart.js';
import { CHARTJSTYPE } from 'src/app/model';

@Component({
  selector: 'app-char-js',
  templateUrl: './char-js.component.html',
  styleUrls: ['./char-js.component.scss']
})
export class CharJsComponent implements AfterViewInit{

  @Input('config') config: any;

  constructor(){ }


  ngAfterViewInit(): void {
    const ctx: HTMLCanvasElement | null = document.getElementById('myChart') as HTMLCanvasElement;
    if(!ctx) return;
    const myChart = new Chart(ctx, this.config);
  }
}
