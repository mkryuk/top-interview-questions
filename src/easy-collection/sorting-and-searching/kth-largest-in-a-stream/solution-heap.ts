import { Heap } from "../../../hard-collection/design/heap/heap";

export class KthLargest {
  heap: Heap<number>;
  k: number;
  constructor(k: number, nums: number[]) {
    this.heap = new Heap<number>((a, b) => a - b);
    this.k = k;
    nums.forEach((node) => this.add(node));
  }

  add(val: number): number {
    this.heap.push(val);
    while (this.heap.size() > this.k) {
      this.heap.pop();
    }
    return this.heap.top()!;
  }
}
