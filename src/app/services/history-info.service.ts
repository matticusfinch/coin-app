import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryInfoService {

  constructor(public firestore: AngularFirestore) { }

  getHistoryInfo(refPath: string): Observable<any> {
    return this.firestore
    .doc(refPath)
    .valueChanges();
  }
}
