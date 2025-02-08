import { Heap } from "../../../hard-collection/design/heap/heap";

export class NumberContainers {
  private indexToNumber: Map<number, number>;
  private numberToIndices: Map<number, Heap<number>>;
  private validIndices: Map<number, Set<number>>;

  constructor() {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();
    this.validIndices = new Map();
  }

  change(index: number, number: number): void {
    if (this.indexToNumber.has(index)) {
      const oldNumber = this.indexToNumber.get(index)!;
      if (oldNumber === number) {
        // no need to reassign if the number is the same
        return;
      }
      // remove old index from valid set
      this.validIndices.get(oldNumber)!.delete(index);
    }
    this.indexToNumber.set(index, number);
    if (!this.numberToIndices.has(number)) {
      this.numberToIndices.set(number, new Heap((a, b) => a - b));
      this.validIndices.set(number, new Set());
    }
    // add index to min heap
    this.numberToIndices.get(number)!.push(index);
    // mark index as valid
    this.validIndices.get(number)!.add(index);
  }

  find(number: number): number {
    if (!this.numberToIndices.has(number)) {
      return -1;
    }
    const validSet = this.validIndices.get(number)!;
    const heap = this.numberToIndices.get(number)!;
    while (!heap.isEmpty() && !validSet.has(heap.top()!)) {
      heap.pop();
    }
    return heap.isEmpty() ? -1 : heap.top()!;
  }
}
