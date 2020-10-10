import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AccountSettings } from '../shared/models/account-settings.model';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account: AccountSettings;
  private userAccount: User;

  constructor(
    public firestore: AngularFirestore) {
    this.userAccount = JSON.parse(localStorage.getItem('user'));
    this.account = this.userAccount.accountSettings;
  }

  public get accountSettings(): AccountSettings {
    return this.account;
  }

  updateAccountSettings(collectName: string, sharePublicly: boolean ) {
    this.firestore
    .collection('/users')
    .doc(this.userAccount.uid)
    .update({
      accountSettings: {
        collectionName: collectName,
        sharedPublicly: sharePublicly,
      }
    });
    // update user in local storage
    this.userAccount.accountSettings.collectionName = collectName;
    this.userAccount.accountSettings.sharedPublicly = sharePublicly;
    localStorage.setItem('user', JSON.stringify(this.userAccount));
  }
}
