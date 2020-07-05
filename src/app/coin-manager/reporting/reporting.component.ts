import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Coin { totalCoins: string; }

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html'
})
export class ReportingComponent implements OnInit {
  private coinDoc: AngularFirestoreDocument<Coin>;
  coin: Observable<Coin>;
  constructor(private afs: AngularFirestore) {
    this.coinDoc = afs.doc<Coin>('coins/newfoundland');
    this.coin = this.coinDoc.valueChanges();
  }

  ngOnInit(): void {
  }
}
