/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingCartServiceService } from './ShoppingCartService.service';

describe('Service: ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartServiceService]
    });
  });

  it('should ...', inject([ShoppingCartServiceService], (service: ShoppingCartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
