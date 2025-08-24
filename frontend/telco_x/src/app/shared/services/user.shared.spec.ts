import { TestBed } from '@angular/core/testing';

import { UserShared } from './user.shared';

describe('UserShared', () => {
  let service: UserShared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserShared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
