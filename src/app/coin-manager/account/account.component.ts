import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm = new FormGroup({
    collectionName: new FormControl(''),
    sharedPublicly: new FormControl(false),
  });

  constructor(public dialog: MatDialog,
              public accountService: AccountService,
              private snackBar: MatSnackBar) { }

  openDialog() {
    this.dialog.open(DeleteComponent);
  }
  ngOnInit(): void {
    this.getAccountSettings();
  }

  getAccountSettings() {
      if (this.accountService.accountSettings) {
        this.accountForm.setValue({
          collectionName: this.accountService.accountSettings.collectionName,
          sharedPublicly: this.accountService.accountSettings.sharedPublicly
      });
    }
  }

  saveSettings() {
    this.accountService.updateAccountSettings(
      this.accountForm.get('collectionName').value,
      this.accountForm.get('sharedPublicly').value);
    this.openSnackBar('Account settings saved.', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
