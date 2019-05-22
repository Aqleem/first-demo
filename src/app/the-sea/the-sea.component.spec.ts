import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSeaComponent } from './the-sea.component';

describe('TheSeaComponent', () => {
  let component: TheSeaComponent;
  let fixture: ComponentFixture<TheSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
