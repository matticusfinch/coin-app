import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveCoinService } from 'src/app/services/save-coin.service';

@Component({
  selector: 'app-edit-coin',
  templateUrl: './edit-coin.component.html',
  styleUrls: ['./edit-coin.component.css']
})
export class EditCoinComponent implements OnInit {
  editCoinForm = new FormGroup({
    purchasePrice: new FormControl(''),
    locationStored: new FormControl(''),
    purchaseDate: new FormControl(''),
    purchasedFrom: new FormControl(''),
    tpg: new FormControl(''),
    gradeReference: new FormControl(''),
    notes: new FormControl(''),
  });

  constructor(private snackBar: MatSnackBar,
              public saveCoinService: SaveCoinService) { }

  ngOnInit(): void {
  }

  saveCoin() {
    // this.saveCoinService.saveCoin(); -----------todo
    this.openSnackBar('Coin saved.', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
