/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSerivceService } from './UserSerivce.service';

describe('Service: UserSerivce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSerivceService]
    });
  });

  it('should ...', inject([UserSerivceService], (service: UserSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
