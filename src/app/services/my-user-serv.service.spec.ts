import { TestBed } from '@angular/core/testing';

import { MyUserServService } from './my-user-serv.service';

describe('MyUserServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyUserServService = TestBed.get(MyUserServService);
    expect(service).toBeTruthy();
  });
});
