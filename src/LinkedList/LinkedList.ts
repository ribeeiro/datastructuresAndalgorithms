import { LinkedListNode } from '../LinkedListNode/LinkedListNode';

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

  public push(data: unknown): unknown {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current: LinkedListNode = this.head;
      while (current) {
        if (current.nextNode === null) {
          current.nextNode = newNode;
          break;
        }
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

  public pop(): unknown {
    if (this.head?.nextNode) {
      let dataToRemove = this.head;
      let prev;
      for (let i = 0; i < this.length - 1; i++) {
        prev = dataToRemove;
        dataToRemove = dataToRemove.nextNode as LinkedListNode;
      }
      (prev as LinkedListNode).nextNode = null;
      const removedData = dataToRemove.data;
      return removedData;
    }
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

const List = new LinkedList();
List.push(2);
List.push(4213);
List.push(422313);
List.pop();
