import { DatePipe } from "@angular/common";
import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDateRangePicker } from "@angular/material/datepicker";
import { DATE, PeriodType } from "src/app/model";

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  @ViewChild('picker') picker: MatDateRangePicker<any>;
  @Output() dateChange: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();

  dateRange: PeriodType[] = [
    { label: 'Last 7 Days', value: '7' },
    { label: 'Last 14 Days', value: '14' },
    { label: 'Last 1 Months', value: '1' },
    { label: 'Last 3 Months', value: '3' },
    { label: 'Last 6 Months', value: '6' },
    { label: 'Last 1 Years', value: '365' },
    { label: 'Custom Date Range', value: '999' },
  ];

  dateForm: FormGroup;
  dateRangeLabel: string[] = [];
  yearRange: number = 2;
  minStartDate: Date;
  maxEndDate: Date;

  get dateControl(): AbstractControl<string> {
    return this.dateForm.get('date') as AbstractControl;
  }

  get startDateControl(): AbstractControl<string> {
    return this.dateForm.get('startDate') as AbstractControl;
  }

  get endDateControl(): AbstractControl<string> {
    return this.dateForm.get('endDate') as AbstractControl;
  }

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.dateForm = this.fb.group({
      date: ['7', Validators.required ],
      startDate: [''],
      endDate: ['' ]
    });

   }

  ngOnInit(): void {
    this.getMinMaxDateRange();
    this.onSelectedDateOption(this.dateControl.value);
    this.bindStartDateEndDateValueChanges();
  }

  private getMinMaxDateRange() {
    const today: Date = new Date();
    this.minStartDate = this.calculateDate(DATE.YEAR, this.yearRange);
    this.maxEndDate = today;
  }

  private calculateDate(option: string, num: number): Date {
    const today: Date = new Date();
    switch(option){
      case 'year':
        return new Date(today.getFullYear() - num, today.getMonth(), today.getDate());
      case 'month':
        return new Date(today.getFullYear(), today.getMonth() - num, today.getDate());
      default:
        return new Date(today.getFullYear(), today.getMonth(), today.getDate() - num);
    }
  }

  private bindStartDateEndDateValueChanges(): void {
    this.startDateControl.valueChanges.subscribe((startDate: string) => {
      if(startDate){
        this.dateRangeLabel.push(this.dateFormatDate(startDate, '999'));
        this.dateEmitEvent(this.dateRangeLabel);
      }
    });

    this.endDateControl.valueChanges.subscribe((endDate: string) => {
      if(endDate){
        this.dateRangeLabel.push(this.dateFormatDate(endDate, '999'));
        this.dateEmitEvent(this.dateRangeLabel);
      }
    });
  }

  private dateFormatDate(date: string, rangeOption?: string): string {
    if(rangeOption){
      return this.datePipe.transform(date, 'yyyy-MM-dd') as string;
    }
    switch(date){
      case '365':
        return this.datePipe.transform(this.calculateDate(DATE.YEAR, 1), 'yyyy-MM-dd') as string;
      case '1':
      case '3':
      case '6':
        return this.datePipe.transform(this.calculateDate(DATE.MONTH, +date), 'yyyy-MM-dd') as string;

      default:
        return this.datePipe.transform(this.calculateDate(DATE.DAY, +date), 'yyyy-MM-dd') as string;
    }
  }

  private dateEmitEvent(searchDate: string | string[]): void {
    if(typeof searchDate === 'string'){
      this.dateChange.emit(searchDate);
    }
    if(searchDate.length === 2){
      this.dateChange.emit(searchDate);
    }
  }

  onSelectedDateOption(value: string){
    if(value === '999'){
      this.picker.open();
    }else{
      this.clearSelectedDateRange();
      this.dateEmitEvent(this.dateFormatDate(value));
    }
  }

  private clearSelectedDateRange(): void {
    this.startDateControl.patchValue('', { emitEvent: false });
    this.endDateControl.patchValue('', { emitEvent: false });
    this.dateRangeLabel = [];
  }

}

