import { TestBed, async, inject } from '@angular/core/testing';

import { CareDetailGuard } from './care-detail.guard';

describe('CareDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareDetailGuard]
    });
  });

  it('should ...', inject([CareDetailGuard], (guard: CareDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
