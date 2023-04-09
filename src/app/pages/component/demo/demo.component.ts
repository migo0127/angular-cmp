import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable, Subscription, map, startWith, takeUntil, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  date: string | string[];

  progressMode: ProgressBarMode = 'determinate';
  progressValue: number = 0;
  progress$: Observable<number>;

  constructor( ) { }

  ngOnInit(): void {
    this.progress$ = this.initProgress();
  }

  initProgress(): Observable<number> {
    return timer(0, 1000).pipe(
      startWith(0),
      map( v => v + 1),
      tap( v => {
        this.progressValue = v;
        return v;
      }),
      takeWhile(v => v < 10)
    );
  }



  onDateChange(e: string | string[]): void {
    this.date = e;
  }

}
