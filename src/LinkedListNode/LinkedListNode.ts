export class LinkedListNode {
  public data: unknown;
  public nextNode: LinkedListNode | null;

  constructor(data: unknown, nextNode: LinkedListNode | null = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}
