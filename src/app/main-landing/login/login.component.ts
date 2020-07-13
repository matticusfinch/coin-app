import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService, private titleService: Title, private metaService: Meta, private router: Router) { }

  ngOnInit(): void {

    if (this.authService.userValue) {
      this.router.navigate(['dashboard']);
    } else {
      this.authService.startUI('#firebaseui-auth-container');
    }


    this.titleService.setTitle('Login | Coin Manager');
    this.metaService.addTags([
      { name: 'description', content: 'Login and start your coin collecting journey.' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

  ngOnDestroy(): void {
    this.authService.stopUI();
  }
}
