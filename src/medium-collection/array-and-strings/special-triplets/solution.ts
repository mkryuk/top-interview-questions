export function specialTriplets(nums: number[]): number {
  const MOD: number = 1e9 + 7;
  const MAX_VAL: number = 100000;

  // how many times value x appears to the left of current index
  const left: number[] = new Array(MAX_VAL + 1).fill(0);

  // how many times value x appears to the right of current index
  const right: number[] = new Array(MAX_VAL + 1).fill(0);

  // initialize right frequencies with all elements
  for (let idx: number = 0; idx < nums.length; idx++) {
    const value: number = nums[idx];
    right[value]++;
  }

  let result: number = 0;

  for (let j: number = 0; j < nums.length; j++) {
    const mid: number = nums[j];

    // move current element from right side to "middle"
    right[mid]--;

    // we need nums[i] = nums[k] = 2 * nums[j]
    const target: number = mid * 2;

    if (target <= MAX_VAL) {
      const leftCount: number = left[target];
      const rightCount: number = right[target];

      if (leftCount > 0 && rightCount > 0) {
        // add combinations leftCount * rightCount
        const add: number = (leftCount * rightCount) % MOD;
        result = (result + add) % MOD;
      }
    }

    // now current mid becomes part of the left side for future j
    left[mid]++;
  }

  return result;
}
