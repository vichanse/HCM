import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareDetailComponent } from './care-detail.component';

describe('CareDetailComponent', () => {
  let component: CareDetailComponent;
  let fixture: ComponentFixture<CareDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
