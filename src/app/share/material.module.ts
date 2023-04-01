import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    MATERIAL_MODULE
  ],
  exports: [
    MATERIAL_MODULE
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
