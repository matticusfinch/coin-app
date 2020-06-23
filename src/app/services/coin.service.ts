import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class CoinService {

  constructor(public firestore: AngularFirestore) {}

  getCoinList(denomination: string): Observable<any[]> {
    return this.firestore.collection(`coins/newfoundland/${denomination}`).valueChanges();
  }
}
