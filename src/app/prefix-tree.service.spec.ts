import { TestBed } from '@angular/core/testing';

import { PrefixTreeService } from './prefix-tree.service';

describe('PrefixTreeService', () => {
  let service: PrefixTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefixTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
