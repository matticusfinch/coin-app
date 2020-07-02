import { Component, OnInit, Inject } from '@angular/core';
import { Mint } from '../../models/mint.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mint-dialog',
  templateUrl: './mint-dialog.component.html'
})
export class MintDialogComponent implements OnInit {
  mint: Mint;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.mint = this.data.info;
  }

}
