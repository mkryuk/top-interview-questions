import { Heap } from "../../../hard-collection/design/heap/heap";

export function maxKelements(nums: number[], k: number): number {
  const heap = new Heap<number>((a, b) => b - a);
  for (const num of nums) {
    heap.push(num);
  }

  let result = 0;
  for (let i = 0; i < k; i++) {
    const num = heap.pop()!;
    result += num;
    heap.push(Math.ceil(num / 3));
  }

  return result;
}
