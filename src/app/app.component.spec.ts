import { async, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { path, pipe, always } from 'ramda';

import { AppComponent } from './app.component';
import { BoNavComponent } from './bo-nav/bo-nav.component';

export const createAppComponent = () => TestBed.createComponent(AppComponent);

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
      ],
      declarations: [
        BoNavComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  let component;

  beforeEach(() => {
    component = createAppComponent();
  });

  afterEach(() => {
    component = null;
  });

  it('should create the app', async(pipe(
    () => component.debugElement.componentInstance,
    cmp => expect(cmp).toBeTruthy()
  )));
});
