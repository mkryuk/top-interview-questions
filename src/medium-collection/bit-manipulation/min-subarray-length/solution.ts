export function minimumSubarrayLength(nums: number[], k: number): number {
  let result = Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  const bitCounts = new Array(32).fill(0);
  while (windowEnd < nums.length) {
    // add current number to window
    updateBitCounts(bitCounts, nums[windowEnd], 1);
    while (windowStart <= windowEnd && convertBitCountsToNumber(bitCounts) >= k) {
      result = Math.min(result, windowEnd - windowStart + 1);
      // remove leftmost number and shrink window
      updateBitCounts(bitCounts, nums[windowStart], -1);
      windowStart++;
    }
    windowEnd++;
  }
  return result === Infinity ? -1 : result;
}

function updateBitCounts(bitCounts: number[], number: number, delta: number): void {
  for (let bitPosition = 0; bitPosition < 32; bitPosition++) {
    if (((number >>> bitPosition) & 1) !== 0) {
      bitCounts[bitPosition] += delta;
    }
  }
}

function convertBitCountsToNumber(bitCounts: number[]): number {
  let result = 0;
  for (let bitPosition = 0; bitPosition < 32; bitPosition++) {
    if (bitCounts[bitPosition] !== 0) {
      result |= 1 << bitPosition;
    }
  }
  return result;
}
