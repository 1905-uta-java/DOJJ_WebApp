import { TestBed } from '@angular/core/testing';

import { BanService } from './ban.service';

describe('BanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanService = TestBed.get(BanService);
    expect(service).toBeTruthy();
  });
});
