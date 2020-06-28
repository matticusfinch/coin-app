import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.authService.startUI('#firebaseui-auth-container');
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
