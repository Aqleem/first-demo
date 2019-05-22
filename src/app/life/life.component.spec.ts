import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LIFEComponent } from './life.component';

describe('LIFEComponent', () => {
  let component: LIFEComponent;
  let fixture: ComponentFixture<LIFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LIFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LIFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
