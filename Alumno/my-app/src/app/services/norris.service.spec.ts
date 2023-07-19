import { TestBed } from '@angular/core/testing';

import { NorrisService } from './norris.service';

describe('NorrisService', () => {
  let service: NorrisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorrisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
