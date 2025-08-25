export function longestSubarray(nums: number[]): number {
  let left: number = 0;
  let zeroCount: number = 0;
  let best: number = 0;

  for (let right: number = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    const effectiveOnes: number = right - left;
    if (effectiveOnes > best) {
      best = effectiveOnes;
    }
  }

  return best;
}
