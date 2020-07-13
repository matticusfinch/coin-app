import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, fromDocRef } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

firebase.initializeApp(environment.firebase);

// const uiConfig = {

//   callbacks: {
//     signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
//     // signInSuccessWithAuthResult: (authResult, redirectUrl) => {
//     //   // <- alternate way to handle success if we need
//     //   // User successfully signed in.
//     //   // Return type determines whether we continue the redirect automatically
//     //   // or whether we leave that to developer to handle.
//     //   return true;
//     // }
//   },
//   signInSuccessUrl: 'dashboard',
//   // signInFlow: 'popup', // this make the auth popup, without it, it displays in page, which is better for mobile.
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ]
// };


@Injectable()
export class AuthService {
  private user: firebase.User;
  private userDetails: User;
  private ui: any;

  private uiConfig = {

    callbacks: {
      signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
      // signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      //   console.log(authResult);
      //   const currentUserID = firebase.auth().currentUser.uid;
      //   console.log(currentUserID);
      //   // User successfully signed in.
      //   // Return type determines whether we continue the redirect automatically
      //   // or whether we leave that to developer to handle.
      //   return true;
      // }
    },
    signInSuccessUrl: 'dashboard',
    // signInFlow: 'popup', // this make the auth popup, without it, it displays in page, which is better for mobile.
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ]
  };

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore) {

      afAuth.authState.subscribe(user => {
        this.user = user;
        if (this.user && user.uid) {
          this.getUser();
        }
      });
    }

    getUserDetails() {
      console.log('in get user details');
      return this.userDetails;
    }

    startUI(container: string) {
      this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
      this.ui.start('#firebaseui-auth-container', this.uiConfig);
    }

    onLoginSuccessful() {
      this.router.navigate(['dashboard']);
    }

    createUser() {
      this.afs.collection('/users').doc(this.user.uid).set({
        name: this.user.displayName,
        coinsCollected: 0,
        email: this.user.email
      });
    }

    getUser() {
      this.afs.collection('/users')
        .doc(this.user.uid).valueChanges()
        .subscribe(data =>
          { if (data) {
              console.log('in get user');
              this.userDetails = data as User;
            } else {
              this.createUser();
            }
          });
    }

    async signOut() {
      await this.afAuth.signOut().then(res => {
        this.router.navigate(['']);
        }
      );
    }

    stopUI() {
     this.ui.delete();
    }
}
