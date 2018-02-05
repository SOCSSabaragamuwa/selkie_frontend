import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopeventsComponent } from './topevents.component';

describe('TopeventsComponent', () => {
  let component: TopeventsComponent;
  let fixture: ComponentFixture<TopeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
