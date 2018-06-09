import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bo-nav',
  templateUrl: './bo-nav.component.html',
  styleUrls: ['./bo-nav.component.css']
})
export class BoNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
