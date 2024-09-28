export class MyCircularDeque {
  queue: number[];
  readonly maxSize: number;
  constructor(k: number) {
    this.queue = [];
    this.maxSize = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue = [value, ...this.queue];
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.pop();
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[0];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.queue.length - 1];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.maxSize;
  }
}
