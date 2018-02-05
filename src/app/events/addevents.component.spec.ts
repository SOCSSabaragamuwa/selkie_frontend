import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventsComponent } from './addevents.component';

describe('AddeventsComponent', () => {
  let component: AddeventsComponent;
  let fixture: ComponentFixture<AddeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
