import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      // signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this) <- alternate way to handle success if we need
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }
  },
  signInSuccessUrl: 'dashboard',
  // signInFlow: 'popup', // this make the auth popup, without it, it displays in page, which is better for mobile.
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ]
};



@Injectable()
export class AuthService {

  userData: any;
  ui: any;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore) {

      this.afAuth.authState.subscribe(
        user => {

        }
      );
    }

    startUI(container: string) {
      this.ui = new firebaseui.auth.AuthUI(firebase.auth());
      this.ui.start('#firebaseui-auth-container', uiConfig);
    }


}
