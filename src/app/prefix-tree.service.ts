import {Injectable} from '@angular/core';
import {TermNode} from './node';
import {Observable, Subscriber} from 'rxjs';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PrefixTreeService {

  private root: Map<string, TermNode> = new Map<string, TermNode>();

  constructor() {
  }

  add(word: string): void {
    if (!word || word.length === 0) {
      return;
    }

    this.addWordRecursively(word, this.root);
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
    console.log(this.root, 'dsdsds');
    console.log(JSON.stringify(this.root.entries()));
    this.root.forEach((value, key) => {
      console.log(`${key}=>${value}`);
    });

    console.log(JSON.stringify(this.root, null, 4));

    const letter = prefix[0];
    const restPrefix = prefix.substring(1);

    const termNode = this.findBeginning(restPrefix, this.root.get(letter));
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

    const foundNode = node.subTree.get(letter);
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

    node.subTree.forEach((value, key) => {
      const subWord = accumulator + key;
      this.accumulateAllWords(subWord, observer, node);
    });
  }

  private addWordRecursively(word: string, subTree: Map<string, TermNode>): void {
    if (!word || word.length === 0) {
      return;
    }

    const letter = word.substr(0, 1);
    let foundNode = subTree.get(letter);
    if (!foundNode) {
      foundNode = new TermNode(letter, false, new Map<string, TermNode>());
      subTree.set(letter, foundNode) ;
    }

    this.addWordRecursively(word.substring(1), foundNode.subTree);
  }

}
