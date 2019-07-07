import { TestBed } from '@angular/core/testing';

import { TheatresNearbyService } from './theatres-nearby.service';

describe('TheatresNearbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheatresNearbyService = TestBed.get(TheatresNearbyService);
    expect(service).toBeTruthy();
  });
});
