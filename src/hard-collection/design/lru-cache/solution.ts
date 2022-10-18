class CacheNode {
  prev: CacheNode | null;
  next: CacheNode | null;
  key: number;
  value: number;
  constructor(key: number, value: number) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.value = value;
  }
}

export class LRUCache {
  cache: Map<number, CacheNode>;
  capacity: number;
  highKey: number = -1;
  lowKey: number = -1;
  constructor(capacity: number) {
    this.cache = new Map<number, CacheNode>();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const curNode = this.cache.get(key)!;
      this.updatePriority(key);
      return curNode.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.updateKey(key, value);
      return;
    }
    this.addKey(key, value);
  }

  private updateKey(key: number, value: number) {
    const curNode = this.cache.get(key)!;
    this.updatePriority(key);
    curNode.value = value;
  }

  private updatePriority(key: number) {
    const curNode = this.cache.get(key)!;
    if (key === this.highKey) {
      // we should not modify the priority
      return;
    }
    if (key === this.lowKey) {
      // curNode is the low key node
      this.lowKey = curNode.next!.key;
      // since this is new low node
      // remove prev node pointer
      curNode.next!.prev = null;
    } else {
      // not high and not low
      // we are somewhere in the middle
      const prevNode = curNode.prev!;
      const nextNode = curNode.next!;
      // point prev node and next node
      // around current node
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    // point prev high node to the current
    // and vice versa
    const prevHighNode = this.cache.get(this.highKey)!;
    this.highKey = key;
    prevHighNode.next = curNode;
    curNode.prev = prevHighNode;
    curNode.next = null;
  }

  private addKey(key: number, value: number) {
    const newNode = new CacheNode(key, value);
    if (this.cache.size === 0) {
      // just add first node
      this.highKey = key;
      this.lowKey = key;
      this.cache.set(key, newNode);
      return;
    }

    const prevHighNode = this.cache.get(this.highKey)!;
    prevHighNode.next = newNode;
    newNode.prev = prevHighNode;
    if (this.cache.size >= this.capacity) {
      const lowNode = this.cache.get(this.lowKey)!;
      const newLowNode = lowNode.next!;
      newLowNode.prev = null;
      this.cache.delete(this.lowKey);
      this.lowKey = newLowNode.key;
    }
    this.cache.set(key, newNode);
    this.highKey = key;
  }
}
