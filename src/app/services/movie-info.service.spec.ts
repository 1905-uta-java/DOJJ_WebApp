import { TestBed } from '@angular/core/testing';

import { MovieInfoService } from './movie-info.service';

describe('MovieInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieInfoService = TestBed.get(MovieInfoService);
    expect(service).toBeTruthy();
  });
});
