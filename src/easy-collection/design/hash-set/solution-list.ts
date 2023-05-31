class Node {
  key: number;
  next: Node | null;

  constructor(key: number, next: Node | null = null) {
    this.key = key;
    this.next = next;
  }
}

export class MyHashSet {
  numberOfBuckets = 1000;
  buckets = new Array<Node | null>(this.numberOfBuckets);
  constructor() {}

  add(key: number): void {
    const index = key % this.numberOfBuckets;
    let node = this.buckets[index];
    if (!node) {
      this.buckets[index] = new Node(key);
      return;
    }
    while (node && node.key !== key && node.next) {
      node = node.next;
    }
    if (node.key === key) {
      return;
    }
    node.next = new Node(key);
  }

  remove(key: number): void {
    const index = key % this.numberOfBuckets;
    let node = this.buckets[index];
    if (!node) {
      return;
    }
    if (node.key === key) {
      this.buckets[index] = node.next;
      return;
    }
    while (node && node.next) {
      if (node.next.key === key) {
        node.next = node.next.next;
      }
      node = node.next;
    }
  }

  contains(key: number): boolean {
    const index = key % this.numberOfBuckets;
    let node = this.buckets[index];
    while (node) {
      if (node.key === key) {
        return true;
      }
    }
    return false;
  }
}
