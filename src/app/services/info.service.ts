import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(public firestore: AngularFirestore) { }

  getArtistInfo(artist: string): Observable<any> {
    return this.firestore
    .doc(artist)
    .valueChanges();
  }
}
