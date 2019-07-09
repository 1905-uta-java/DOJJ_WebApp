import { TestBed } from '@angular/core/testing';

import { CreateNewUserService } from './create-new-user.service';

describe('CreateNewUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateNewUserService = TestBed.get(CreateNewUserService);
    expect(service).toBeTruthy();
  });
});
