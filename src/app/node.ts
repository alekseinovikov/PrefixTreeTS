export class TermNode {

  public letter: string;
  public end: boolean;
  public subTree: Map<string, TermNode>;

  constructor(letter: string, end: boolean, subTree: Map<string, TermNode>) {
    this.letter = letter;
    this.end = end;
    this.subTree = subTree;
  }

}
