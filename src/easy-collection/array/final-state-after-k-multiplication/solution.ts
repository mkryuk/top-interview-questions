import { Heap } from "../../../hard-collection/design/heap/heap";

export function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  let minHeap = new Heap<[number, number]>(([ai, a], [bi, b]) => a - b || ai - bi);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    minHeap.push([i, nums[i]]);
  }

  for (let i = 0; i < k; i++) {
    let [index, num] = minHeap.pop()!;
    num *= multiplier;
    nums[index] = num;
    minHeap.push([index, num]);
  }

  return nums;
}
