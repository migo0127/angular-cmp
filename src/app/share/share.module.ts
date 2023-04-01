import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

const ANGULAR_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
]

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    ANGULAR_MODULE
  ],
  exports: [
    MaterialModule,
    ANGULAR_MODULE,
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
