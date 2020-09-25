import {Injectable} from '@angular/core';
import {TermNode} from './node';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefixTreeService {

  private root: Record<string, TermNode> = {};

  constructor() {
  }

  add(word: string): void {
    if (!word || word.length === 0) {
      return;
    }

    const letter = word[0];
    let rootElement = this.root[letter];
    if (!rootElement) {
      rootElement = new TermNode(letter, false, {});
      this.root[letter] = rootElement;
    }

    const finalNode = this.addWordRecursively(word.substring(1), rootElement);
    finalNode.end = true;
  }

  find(prefix: string): Observable<string> {
    return new Observable<string>(observer => {
      this.findInternal(prefix, observer);
      observer.complete();
    });
  }

  private findInternal(prefix: string, observer: Subscriber<string>): void {
    if (!prefix || prefix.length < 1) {
      return;
    }

    const letter = prefix[0];
    const restPrefix = prefix.substring(1);

    const termNode = this.findBeginning(restPrefix, this.root[letter]);
    if (!termNode) {
      return;
    }

    this.accumulateAllWords(prefix, observer, termNode);
  }

  private findBeginning(prefix: string, node: TermNode): TermNode {
    if (!prefix || prefix.length < 1 || !node) {
      return node;
    }

    const letter = prefix[0];
    const restPrefix = prefix.substring(1);

    const foundNode = node.subTree[letter];
    if (!foundNode) {
      return null;
    }

    if (!restPrefix || restPrefix.length < 1) {
      return foundNode;
    }

    return this.findBeginning(restPrefix, foundNode);
  }

  private accumulateAllWords(accumulator: string, observer: Subscriber<string>, node: TermNode): void {
    if (node.end) {
      observer.next(accumulator);
    }

    Object.entries(node.subTree).forEach(([key, value]) => {
      const subWord = accumulator + key;
      this.accumulateAllWords(subWord, observer, value);
    });
  }

  private addWordRecursively(word: string, node: TermNode): TermNode {
    if (!word || word.length === 0) {
      return node;
    }

    const letter = word[0];
    const subTree = node.subTree;

    let foundNode = subTree[letter];
    if (!foundNode) {
      foundNode = new TermNode(letter, false, {});
      subTree[letter] = foundNode;
    }

    return this.addWordRecursively(word.substring(1), foundNode);
  }

}
