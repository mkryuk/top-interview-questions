export function maxValue(nums: number[]): number[] {
  const n = nums.length;
  const suffixMin = buildSuffixMin(nums);
  const result = new Array<number>(n);
  let segmentStart = 0;
  let segmentMax = nums[0];

  for (let i = 0; i < n; i++) {
    segmentMax = Math.max(segmentMax, nums[i]);
    const isLastIndex = i === n - 1;
    const canSplitHere = isLastIndex || segmentMax <= suffixMin[i + 1];

    if (canSplitHere) {
      fillSegment(result, segmentStart, i, segmentMax);
      segmentStart = i + 1;
      if (segmentStart < n) {
        segmentMax = nums[segmentStart];
      }
    }
  }

  return result;
}

function buildSuffixMin(nums: number[]): number[] {
  const n = nums.length;
  const suffixMin = new Array<number>(n);
  suffixMin[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  return suffixMin;
}

function fillSegment(result: number[], left: number, right: number, value: number): void {
  for (let i = left; i <= right; i++) {
    result[i] = value;
  }
}
