import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom, filter } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { WhatsHotComponent } from '../whats-hot/whats-hot.component';
import { ThemeService } from '../../services/theme.service';
import {OverlayContainer} from '@angular/cdk/overlay';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  @ViewChild('drawer') drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public dialog: MatDialog,
    private overlayContainer: OverlayContainer,
    public authServie: AuthService
    ) {

    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }

  openDialog() {
    this.dialog.open(WhatsHotComponent);
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    if (checked) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }

  signOut() {
    this.authServie.signOut();
  }
}
