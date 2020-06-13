import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

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
      signInSuccessUrl: 'dashboard',
      signInFlow: 'popup',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID, // <- I need to figure out this still
      ],
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
