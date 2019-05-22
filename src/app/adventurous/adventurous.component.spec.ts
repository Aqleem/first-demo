import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurousComponent } from './adventurous.component';

describe('AdventurousComponent', () => {
  let component: AdventurousComponent;
  let fixture: ComponentFixture<AdventurousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
