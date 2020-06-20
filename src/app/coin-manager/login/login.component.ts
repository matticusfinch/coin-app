import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

firebase.initializeApp(environment.firebase);


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  ui: any;
  constructor() { }

  ngOnInit(): void {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          // signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this) <- alternate way to handle success if we need
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
      },
      signInSuccessUrl: 'dashboard/reporting',
      // signInFlow: 'popup', // this make the auth popup, without it, it displays in page, which is better for mobile.
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID, // <- I need to figure out this still
      ],
    };

    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  ngOnDestroy() {
    this.ui.delete();
  }

}
