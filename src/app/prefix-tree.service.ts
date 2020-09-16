import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrefixTreeService {

  private root: Map<string, Node>

  constructor() { }

}
