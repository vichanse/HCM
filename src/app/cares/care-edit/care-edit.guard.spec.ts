import { TestBed, async, inject } from '@angular/core/testing';

import { CareEditGuard } from './care-edit.guard';

describe('CareEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareEditGuard]
    });
  });

  it('should ...', inject([CareEditGuard], (guard: CareEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
