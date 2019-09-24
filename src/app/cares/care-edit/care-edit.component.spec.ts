import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareEditComponent } from './care-edit.component';

describe('CareEditComponent', () => {
  let component: CareEditComponent;
  let fixture: ComponentFixture<CareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
