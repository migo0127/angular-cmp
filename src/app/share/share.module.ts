import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChartJsComponent } from './component/chart-js/chart-js.component';
import { NgChartsModule } from 'ng2-charts';

const ANGULAR_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
]

const COMMON_COMPONENT = [
  ChartJsComponent,
]

@NgModule({
  declarations: [
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
    COMMON_COMPONENT
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
