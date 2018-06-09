
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoNavComponent } from './bo-nav.component';

describe('BoNavComponent', () => {
  let component: BoNavComponent;
  let fixture: ComponentFixture<BoNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
