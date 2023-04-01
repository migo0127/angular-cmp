import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/model";

@Component({
  selector: 'app-material-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class MaterialDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

}

