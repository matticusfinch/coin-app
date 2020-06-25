import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.startUI('#firebaseui-auth-container');
  }

  ngOnDestroy(): void {
    this.authService.stopUI();
  }
}
