import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkcsvComponent } from './bulkcsv.component';

describe('BulkcsvComponent', () => {
  let component: BulkcsvComponent;
  let fixture: ComponentFixture<BulkcsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkcsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
