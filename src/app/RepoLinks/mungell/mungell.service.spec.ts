import { TestBed } from '@angular/core/testing';

import { MungellService } from './mungell.service';

describe('MungellService', () => {
  let service: MungellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MungellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
