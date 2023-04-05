import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CharJsComponent } from './component/dialog/char-js/char-js.component';

const ANGULAR_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
]

const COMMON_COMPONENT = [
  CharJsComponent,
]

@NgModule({
  declarations: [
    COMMON_COMPONENT,
  ],
  imports: [
    MaterialModule,
    ANGULAR_MODULE
  ],
  exports: [
    MaterialModule,
    ANGULAR_MODULE,
    COMMON_COMPONENT
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
