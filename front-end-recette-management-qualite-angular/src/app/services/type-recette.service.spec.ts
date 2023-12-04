import { TestBed } from '@angular/core/testing';

import { TypeRecetteService } from './type-recette.service';

describe('TypeRecetteService', () => {
  let service: TypeRecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeRecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
