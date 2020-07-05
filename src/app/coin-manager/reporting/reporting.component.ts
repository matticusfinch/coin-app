import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth  } from '@angular/fire/auth';

export interface Coin { totalCoins: number; }
export interface Total { coinsCollected: number; }

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html'
})
export class ReportingComponent implements OnInit {
  private coinDoc: AngularFirestoreDocument<Coin>;
  private userDoc: AngularFirestoreDocument<Total>;
  private user: firebase.User;
  coin: Observable<Coin>;
  collected: Observable<Total>;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
      this.coinDoc = afs.doc<Coin>('coins/newfoundland');
      this.coin = this.coinDoc.valueChanges();
      this.userDoc = afs.collection<Total>('/users').doc(this.user.uid);
      this.collected = this.userDoc.valueChanges();
    });

  }

  ngOnInit(): void {
  }
}
