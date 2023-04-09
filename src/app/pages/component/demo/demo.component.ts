import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable, map, startWith, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {

  date: string | string[] | null = null;

  progressMode: ProgressBarMode = 'determinate';
  progressValue: number = 0;
  progress$: Observable<number>;

  constructor(){ }

  ngOnInit(): void {
    this.progress$ = this.initProgress();
  }

  initProgress(): Observable<number> {
    return timer(0, 1000).pipe(
      startWith(0),
      map( v => v + 1),
      takeWhile(v => v <= 10),
      tap( v => {
        this.progressValue = v;
        return v;
      }),
    );
  }

  onDateChange(e: string | string[]): void {
    this.date = e;
    // this.ngZone.runOutsideAngular(() => {
    //   this.date = e;
    // });
    // this.cdRef.detectChanges();
  }

}
