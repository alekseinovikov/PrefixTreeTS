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

  it('should be possible to find added words', () => {
    service.add('test');
    service.find('te')
      .subscribe(res => {
        console.log('ON VALUE!');
        console.log(res);
      }, error => {}, () => {
        console.log('ON COMPLETE!!!');
      });
     /* .pipe(toArray())
      .subscribe(value => {
        console.log(value);
        expect(value.length).toEqual(1);
        expect(value[0]).toEqual('test');
      });*/
  });
});
