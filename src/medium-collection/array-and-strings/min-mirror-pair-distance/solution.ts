export function minMirrorPairDistance(nums: number[]): number {
  // stores: target value -> latest index i such that reverse(nums[i]) = target value
  const latestIndexByTarget = new Map<number, number>();

  let result = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];

    // if this value was expected by some earlier number's reverse,
    // then we found a mirror pair
    if (latestIndexByTarget.has(value)) {
      const previousIndex = latestIndexByTarget.get(value)!;
      result = Math.min(result, index - previousIndex);
    }

    // current number can form a mirror pair with a future element
    const reversedValue = reverseNumber(value);
    latestIndexByTarget.set(reversedValue, index);
  }

  if (result === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return result;
}

function reverseNumber(value: number): number {
  let result = 0;
  let current = value;

  while (current > 0) {
    result = result * 10 + (current % 10);
    current = Math.floor(current / 10);
  }

  return result;
}
