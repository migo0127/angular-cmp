import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialDialogComponent } from './component/dialog/dialog.component';
import { ShareModule } from './share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
]

const MATERIAL_COMPONENT = [
  MaterialDialogComponent
]

@NgModule({
  declarations: [
    MaterialDialogComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULE,
  ],
  exports: [
    MATERIAL_MODULE,
    MATERIAL_COMPONENT,
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
