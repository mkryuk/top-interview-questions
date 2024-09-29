export class MyCircularDeque {
  private capacity: number;
  private size: number;
  private front: number;
  private rear: number;
  private arr: number[];

  constructor(k: number) {
    this.capacity = k;
    this.size = 0;
    this.arr = new Array(k);
    this.front = 0;
    this.rear = k - 1;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.arr[this.front] = value;
    this.size += 1;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.arr[this.rear] = value;
    this.size += 1;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size -= 1;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.front];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.rear];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}
