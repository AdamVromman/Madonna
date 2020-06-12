import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeestzaalComponent } from './feestzaal.component';

describe('FeestzaalComponent', () => {
  let component: FeestzaalComponent;
  let fixture: ComponentFixture<FeestzaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeestzaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeestzaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
