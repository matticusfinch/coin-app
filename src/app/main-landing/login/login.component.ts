import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService, public titleService: Title) { }

  ngOnInit(): void {
    this.authService.startUI('#firebaseui-auth-container');
    this.titleService.setTitle('Login | Coin Manager');
  }

  ngOnDestroy(): void {
    this.authService.stopUI();
  }
}
