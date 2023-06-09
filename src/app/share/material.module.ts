import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialDialogComponent } from './component/dialog/dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatRadioModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatProgressBarModule,
  DragDropModule,
  MatMenuModule,
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
