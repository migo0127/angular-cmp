import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, CategoryScale, LineController, BarController,LineElement, PointElement, LinearScale, BarElement, Title, BubbleController, DoughnutController, ArcElement, PieController, PolarAreaController, RadialLinearScale, RadarController, ScatterController} from 'chart.js'

@Component({
  selector: 'app-char-js',
  templateUrl: './char-js.component.html',
  styleUrls: ['./char-js.component.scss']
})
export class CharJsComponent implements AfterViewInit{

  @Input('barChartConfig') barChartConfig: any
  @ViewChild('canvasChart') canvasChart: ElementRef;

  constructor(
  ){
    Chart.register(
      LineController, BarController, BubbleController, DoughnutController,
      PieController, PolarAreaController, RadarController, ScatterController,
      CategoryScale, RadialLinearScale, BarElement, LineElement, PointElement,
      ArcElement, LinearScale, Title
    );
   }

  ngAfterViewInit(): void {
    const ctx = this.canvasChart.nativeElement.getContext('2d');
    if(!ctx) return;
    const chart = new Chart(ctx, this.barChartConfig);
  }
}
