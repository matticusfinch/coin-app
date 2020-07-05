import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Coins by Grade', cols: 1, rows: 1 },
          { title: 'Most Recent', cols: 1, rows: 1 },
          { title: 'Total Coins Collected', cols: 1, rows: 1 },
          { title: 'Coins by Denomination', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Coins by Grade', cols: 2, rows: 1 },
        { title: 'Most Recent', cols: 1, rows: 1 },
        { title: 'Total Coins Collected', cols: 1, rows: 2 },
        { title: 'Coins by Denomination', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
