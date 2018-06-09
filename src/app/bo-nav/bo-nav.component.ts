import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { prop } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bo-nav',
  templateUrl: './bo-nav.component.html',
  styleUrls: ['./bo-nav.component.css']
})
export class BoNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(prop('matches'))
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
