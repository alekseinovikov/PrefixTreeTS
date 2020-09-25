export class TermNode {

  public letter: string;
  public end: boolean;
  public subTree: Record<string, TermNode>;

  constructor(letter: string, end: boolean, subTree: Record<string, TermNode>) {
    this.letter = letter;
    this.end = end;
    this.subTree = subTree;
  }

}
