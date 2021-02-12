import { TestBed } from '@angular/core/testing';

import { PlatosMockService } from './platos-mock.service';

describe('PlatosMockService', () => {
  let service: PlatosMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
