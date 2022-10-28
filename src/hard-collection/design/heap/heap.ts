export class Heap {
  compare: (left: number, right: number) => number;
  nodes: any[];
  constructor(
    compare: (left: number, right: number) => number,
    values?: number[],
    private leaf?: any,
  ) {
    if (typeof compare !== "function") {
      throw new Error("Heap constructor expects a compare function");
    }
    this.compare = compare;
    this.nodes = Array.isArray(values) ? values : [];
  }

  hasLeftChild(parentIndex: number) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }

  hasRightChild(parentIndex: number) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }

  compareAt(i: number, j: number) {
    return this.compare(this.nodes[i], this.nodes[j]);
  }

  swap(i: number, j: number) {
    const temp = this.nodes[i];
    this.nodes[i] = this.nodes[j];
    this.nodes[j] = temp;
  }

  shouldSwap(parentIndex: number, childIndex: number) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }

    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }

    return this.compareAt(parentIndex, childIndex) > 0;
  }

  compareChildrenOf(parentIndex: number) {
    if (!this.hasLeftChild(parentIndex) && !this.hasRightChild(parentIndex)) {
      return -1;
    }

    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    if (!this.hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }

    if (!this.hasRightChild(parentIndex)) {
      return leftChildIndex;
    }

    const compare = this.compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }

  heapifyUp(startIndex: number) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  heapifyDown(startIndex: number) {
    let parentIndex = startIndex;
    let childIndex = this.compareChildrenOf(parentIndex);

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.compareChildrenOf(parentIndex);
    }
  }

  insert(value: number) {
    this.nodes.push(value);
    this.heapifyUp(this.size() - 1);
    if (this.leaf === null || this.compare(value, this.leaf) > 0) {
      this.leaf = value;
    }
    return this;
  }

  push(value: number) {
    return this.insert(value);
  }

  extractRoot() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.root();
    this.nodes[0] = this.nodes[this.size() - 1];
    this.nodes.pop();
    this.heapifyDown(0);

    if (root === this.leaf) {
      this.leaf = this.root();
    }

    return root;
  }

  pop() {
    return this.extractRoot();
  }

  root() {
    if (this.isEmpty()) {
      return null;
    }

    return this.nodes[0];
  }

  top() {
    return this.root();
  }

  size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
