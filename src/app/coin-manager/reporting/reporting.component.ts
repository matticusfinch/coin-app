import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth  } from '@angular/fire/auth';

export interface Coin {
  totalCoins: number;
  coinsCollected: number;
}

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html'
})
export class ReportingComponent implements OnInit {
  private coinDoc: AngularFirestoreDocument<Coin>;
  private userDoc: AngularFirestoreDocument<Coin>;
  public user: firebase.User;
  coin: Observable<Coin>;
  collected: Observable<Coin>;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
      afs.collection('/users').doc(this.user.uid).set({
        name: this.user.displayName,
        coinsCollected: 43,
        email: this.user.email
      });
      this.coinDoc = afs.doc<Coin>('coins/newfoundland');
      this.coin = this.coinDoc.valueChanges();
      this.userDoc = afs.collection<Coin>('/users').doc(this.user.uid);
      this.collected = this.userDoc.valueChanges();
    });

  }

  ngOnInit(): void {
  }
}
