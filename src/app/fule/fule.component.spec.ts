import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuleComponent } from './fule.component';

describe('FuleComponent', () => {
  let component: FuleComponent;
  let fixture: ComponentFixture<FuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
