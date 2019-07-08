import { TestBed } from '@angular/core/testing';

import { NewReleasesService } from './new-releases.service';

describe('NewReleasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewReleasesService = TestBed.get(NewReleasesService);
    expect(service).toBeTruthy();
  });
});
