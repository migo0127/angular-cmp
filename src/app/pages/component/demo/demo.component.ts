import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable, Subscription, map, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {

  date: string | string[] | null = null;

  progressMode: ProgressBarMode = 'determinate';
  progressValue: number = 100;
  countdownTime: number = 600;
  countdownTimer$: Observable<number>;
  countdownTimerSubscription: Subscription;
  minutes: number = 10;
  seconds: number = 0;

  // progressValue: number = 100;
  // progress$: Observable<number>;

  constructor(
    private cdr: ChangeDetectorRef,
  ){ }

  ngOnInit(): void {
    this.countdownTimer$ = timer(0, 1000).pipe(
      map((i) => {
        this.progressValue -= 0.1667;
        return this.countdownTime - i;
      }),
      tap((time: number) => console.log(time)),
      takeWhile((time: number) => time >= 0)
    );
    // this.progress$ = this.initProgress();
  }

  // initProgress(): Observable<number> {
  //   return timer(0, 1000).pipe(
  //     startWith(0),
  //     map( v => v + 1),
  //     takeWhile(v => v <= 10),
  //     tap( v => {
  //       this.progressValue = v;
  //       return v;
  //     }),
  //   );
  // }

  startCountdownTime(): void {
    if (this.countdownTimerSubscription) this.stopCountdownTime();
    this.progressValue = 100;
    this.countdownTimerSubscription = this.countdownTimer$.subscribe((time: number) => {
      this.minutes = Math.floor(time / 60);
      this.seconds = time % 60;
    });
  }

  stopCountdownTime(): void {
    if (this.countdownTimerSubscription) {
      this.countdownTimerSubscription.unsubscribe();
    }
  }

  onDateChange(e: string | string[]): void {
    // Date Range
    if(Array.isArray(e) && e.length < 2){
      this.date = [];
    }else if (Array.isArray(e) && e.length === 2){
      this.date = e;
    }

    // Date
    if(typeof e === 'string'){
      this.date = e;
    }
    this.cdr.detectChanges();

    // this.ngZone.runOutsideAngular(() => {
    //   this.date = e;
    // });
    // this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    if(this.countdownTimerSubscription){
      this.stopCountdownTime();
    }
  }

}
