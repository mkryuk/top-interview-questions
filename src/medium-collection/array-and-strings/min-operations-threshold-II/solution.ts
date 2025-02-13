import { Heap } from "../../../hard-collection/design/heap/heap";

export function minOperations(nums: number[], k: number): number {
  let heap = new Heap<number>((a, b) => a - b);
  for (const num of nums) {
    heap.push(num);
  }
  let result = 0;
  while (heap.size() >= 2 && heap.top()! < k) {
    const first = heap.pop()!;
    const second = heap.pop()!;
    const num = first * 2 + second;
    heap.push(num);
    result++;
  }
  return result;
}
