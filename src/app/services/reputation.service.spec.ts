import { TestBed } from '@angular/core/testing';

import { ReputationService } from './reputation.service';

describe('ReputationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReputationService = TestBed.get(ReputationService);
    expect(service).toBeTruthy();
  });
});
