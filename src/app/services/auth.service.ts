import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router){}

  async loginWithGoogle() {
    await  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['dashboard']);
  }

  doLogout(){
  }
}
