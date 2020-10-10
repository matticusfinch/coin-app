import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Coin } from '../coin-manager/reporting/reporting.component';

@Injectable()
export class CoinService {

  constructor(
    public firestore: AngularFirestore) {}

  getCoinList(denomination: string): Observable<any[]> {
    return this.firestore
      .collection(`coins/newfoundland/${denomination}`)
      .valueChanges();
  }

  getCoinDetail(denomination: string, year: number): Observable<any> {
    return this.firestore
      .collection(`coins/newfoundland/${denomination}`)
      .doc(`${year}`)
      .valueChanges();
  }

  getCoinCountryTotal(): Observable<any> {
    return this.firestore.doc<Coin>('coins/newfoundland')
    .valueChanges();
  }
}
