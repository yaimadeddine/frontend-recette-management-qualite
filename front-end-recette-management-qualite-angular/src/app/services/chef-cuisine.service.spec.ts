import { TestBed } from '@angular/core/testing';

import { ChefCuisineService } from './chef-cuisine.service';

describe('ChefCuisineService', () => {
  let service: ChefCuisineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefCuisineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
