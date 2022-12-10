import { LinkedListNode } from '../Node';

export class LinkedList {
  private head: LinkedListNode | null;

  constructor() {
    this.head = null;
  }

  get length(): number {
    let counter = 0;
    let current = this.head;

    while (current) {
      counter += 1;
      current = current.nextNode;
    }
    return counter;
  }

  public unshift(data: unknown): unknown {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      return this.head.data;
    }

    const current = this.head;
    newNode.nextNode = current;
    this.head = newNode;
    return this.head.data;
  }

  public pop(data: unknown): unknown {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current: LinkedListNode = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
    }
    return data;
  }

  public shift(): unknown {
    if (this.head?.nextNode) {
      const deletedData = this.head.data;
      this.head = this.head.nextNode;
      return deletedData;
    }
  }

  public push(): unknown {
    if (!this.head?.nextNode) return;
    let current = this.head;
    let tmp;
    while (current.nextNode) {
      tmp = current;
      current = current.nextNode;
    }
    (tmp as LinkedListNode).nextNode = null;
    return (tmp as LinkedListNode).data;
  }

  public toArray(): unknown[] {
    const result: unknown[] = [];
    if (!this.head) return result;
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      result.push(current.data);
      current = current.nextNode as LinkedListNode;
    }
    return result;
  }
}
