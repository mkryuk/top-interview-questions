export function maxSubarraySum(nums: number[], k: number): number {
  // compute prefix sums: pref[i] = sum of nums[0..i-1]
  const n: number = nums.length;
  const pref: number[] = new Array(n + 1);

  pref[0] = 0;

  for (let i: number = 0; i < n; i++) {
    // use prefix sums to handle ranges in o(1)
    pref[i + 1] = pref[i] + nums[i];
  }

  // minPref[rem] = minimum prefix sum seen so far for indices with index % k === rem
  const minPref: number[] = new Array(k);

  for (let r: number = 0; r < k; r++) {
    // initialize with +infinity so any real value will be smaller
    minPref[r] = Number.POSITIVE_INFINITY;
  }

  // index 0 has remainder 0 and prefix sum 0
  minPref[0] = pref[0];

  // answer stores maximum subarray sum for length divisible by k
  let result: number = Number.NEGATIVE_INFINITY;

  for (let i: number = 1; i <= n; i++) {
    const rem: number = i % k;
    const bestPrev: number = minPref[rem];

    if (bestPrev !== Number.POSITIVE_INFINITY) {
      // candidate subarray sum ending at i - 1 with length divisible by k
      const candidate: number = pref[i] - bestPrev;

      if (candidate > result) {
        // update global maximum
        result = candidate;
      }
    }

    // update the minimum prefix sum for this remainder
    if (pref[i] < minPref[rem]) {
      minPref[rem] = pref[i];
    }
  }

  return result;
}
