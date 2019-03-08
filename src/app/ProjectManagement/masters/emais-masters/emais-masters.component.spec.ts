import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaisMastersComponent } from './emais-masters.component';

describe('EmaisMastersComponent', () => {
  let component: EmaisMastersComponent;
  let fixture: ComponentFixture<EmaisMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaisMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaisMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
