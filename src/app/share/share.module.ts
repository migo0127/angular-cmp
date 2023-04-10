import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChartJsComponent } from './component/chart-js/chart-js.component';
import { NgChartsModule } from 'ng2-charts';
import { PeriodComponent } from './component/period/period.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { DetectAlphaNumericDirective } from './directive/detect-alpha-numeric.directive';
import { DetectNumberDirective } from './directive/detect-number.directive';

const ANGULAR_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
]

const COMMON_COMPONENT = [
  ChartJsComponent,
  PeriodComponent,
]

const CUSTOM_PIPE_DIRECTIVE = [
  CapitalizePipe,
  DetectNumberDirective,
  DetectAlphaNumericDirective,
];

@NgModule({
  declarations: [
    CUSTOM_PIPE_DIRECTIVE,
    COMMON_COMPONENT,
  ],
  imports: [
    MaterialModule,
    NgChartsModule,
    ANGULAR_MODULE
  ],
  exports: [
    MaterialModule,
    NgChartsModule,
    ANGULAR_MODULE,
    CUSTOM_PIPE_DIRECTIVE,
    COMMON_COMPONENT,
  ],
  providers:  [DatePipe ],
  bootstrap: []
})
export class ShareModule { }
