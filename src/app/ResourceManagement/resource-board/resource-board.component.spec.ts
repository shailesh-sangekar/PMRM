import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBoardComponent } from './resource-board.component';

describe('ResourceBoardComponent', () => {
  let component: ResourceBoardComponent;
  let fixture: ComponentFixture<ResourceBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
