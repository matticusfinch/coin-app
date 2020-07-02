import { Component, OnInit, Inject } from '@angular/core';
import { Monarch } from '../../models/monarch.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monarch-dialog',
  templateUrl: './monarch-dialog.component.html'
})
export class MonarchDialogComponent implements OnInit {
  monarch: Monarch;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.monarch = this.data.info;
  }

}
