import { Heap } from "../../design/heap/heap";

export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countPairs(nums, mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function countPairs(nums: number[], mid: number): number {
  let count = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    while (j < nums.length && nums[j] - nums[i] <= mid) {
      j++;
    }
    count += j - i - 1;
  }
  return count;
}
