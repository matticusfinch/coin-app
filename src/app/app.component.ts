import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './services/theme.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}