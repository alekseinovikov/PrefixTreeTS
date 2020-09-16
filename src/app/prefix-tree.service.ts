import {Injectable} from '@angular/core';
import {TermNode} from './node';

@Injectable({
  providedIn: 'root'
})
export class PrefixTreeService {

  private root: Map<string, TermNode> = new Map();

  constructor() {
  }

  add(word: string): void {
    if (!word || word.length === 0) {
      return;
    }

    this.addWordRecursively(word, this.root);
  }

  getTree(): Map<string, TermNode> {
    return this.root;
  }

  private addWordRecursively(word: string, subTree: Map<string, TermNode>): void {
    if (!word || word.length === 0) {
      return;
    }

    const letter = word.substr(0, 1);
    let foundNode = subTree[letter];
    if (!foundNode) {
      foundNode = new TermNode(letter, false, new Map());
      subTree[letter] = foundNode;
    }

    this.addWordRecursively(word.substring(1), foundNode.subTree);
  }

}
