import { Heap } from "../../../hard-collection/design/heap/heap";

export function lastStoneWeight(stones: number[]): number {
  var heap = new Heap<number>((left, right) => right - left);
  stones.forEach((s) => heap.insert(s));
  while (heap.size() > 1) {
    const left = heap.pop()!;
    const right = heap.pop()!;
    const result = left - right;
    if (result > 0) {
      heap.insert(result);
    }
  }
  return heap.top()!;
}
