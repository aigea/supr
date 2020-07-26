import { TestBed } from '@angular/core/testing';

import { MathsyService } from './mathsy.service';

describe('MathsyService', () => {
  let service: MathsyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
