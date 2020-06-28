import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './services/theme.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(public themeService: ThemeService, public titleService: Title) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.titleService.setTitle('Coin Manager');
  }
}