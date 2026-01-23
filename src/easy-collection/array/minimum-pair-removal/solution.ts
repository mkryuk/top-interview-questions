export function minimumPairRemoval(nums: number[]): number {
  let result: number = 0;

  while (nums.length > 1 && isNonDecreasing(nums) === false) {
    const idx: number = findMinSumPairLeftmost(nums);
    const merged: number = nums[idx] + nums[idx + 1];

    // replace nums[idx], nums[idx+1] with their sum
    nums.splice(idx, 2, merged);

    result += 1;
  }

  return result;
}

function isNonDecreasing(arr: number[]): boolean {
  for (let i: number = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

function findMinSumPairLeftmost(arr: number[]): number {
  let bestIdx: number = 0;
  let bestSum: number = arr[0] + arr[1];

  for (let i: number = 1; i < arr.length - 1; i += 1) {
    const s: number = arr[i] + arr[i + 1];

    if (s < bestSum) {
      bestSum = s;
      bestIdx = i;
    }
    // if s == bestSum, keep existing bestIdx (leftmost)
  }

  return bestIdx;
}
