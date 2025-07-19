import { Heap } from "../../design/heap/heap";

export function minimumDifference(nums: number[]): number {
  const n = nums.length / 3;
  const total = nums.length;

  // f[i]: min sum of n kept elements among nums[0..i-1]
  const f = new Array<number>(total + 1).fill(0);
  let sum = 0;
  // max-heap to keep the n smallest prefix elements (drop the largest when > n)
  const leftHeap = new Heap<number>((a, b) => b - a);
  for (let i = 0; i < total; i++) {
    leftHeap.push(nums[i]);
    sum += nums[i];
    if (leftHeap.size() > n) {
      sum -= leftHeap.pop()!;
    }
    if (i + 1 >= n) {
      f[i + 1] = sum;
    }
  }

  // g[i]: max sum of n kept elements among nums[i..total-1]
  const g = new Array<number>(total + 1).fill(0);
  sum = 0;
  // min-heap to keep the n largest suffix elements (drop the smallest when > n)
  const rightHeap = new Heap<number>((a, b) => a - b);
  for (let i = total - 1; i >= 0; i--) {
    rightHeap.push(nums[i]);
    sum += nums[i];
    if (rightHeap.size() > n) {
      sum -= rightHeap.pop()!;
    }
    if (total - i >= n) {
      g[i] = sum;
    }
  }

  // scan split points j = n..2n
  let result = Infinity;
  for (let j = n; j <= 2 * n; j++) {
    result = Math.min(result, f[j] - g[j]);
  }
  return result;
}
