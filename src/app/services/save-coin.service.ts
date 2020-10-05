import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SaveCoin } from '../shared/models/save-coin.model';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SaveCoinService {

  constructor() { }
}
