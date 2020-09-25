import {TestBed} from '@angular/core/testing';

import {PrefixTreeService} from './prefix-tree.service';
import {toArray} from 'rxjs/operators';

describe('PrefixTreeService', () => {
  let service: PrefixTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefixTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be possible to add words', () => {
    service.add('test');
  });

  it('should be possible to same words but find the only one', () => {
    service.add('test');
    service.add('test');
    service.add('test');

    service.find('tes')
      .pipe(toArray())
      .subscribe(value => {
        expect(value.length).toEqual(1);
        expect(value).toContain('test');
      });
  });

  it('should be possible to find added words', () => {
    service.add('test');
    service.add('testik');
    service.add('testikan');
    service.add('kutak');
    service.add('kudffgtak');
    service.add('kufdgdffgtak');
    service.add('kufdgdfsgdffgtak');

    service.find('tes')
      .pipe(toArray())
      .subscribe(value => {
        expect(value.length).toEqual(3);
        expect(value).toContain('test');
        expect(value).toContain('testik');
        expect(value).toContain('testikan');
      });
  });
});
