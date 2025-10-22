export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  // compute bounds of the only values that matter: union of [a_i - k, a_i + k]
  const n: number = nums.length;

  // find min and max of nums to bound the sweep range
  let minA: number = nums[0];
  let maxA: number = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] < minA) {
      minA = nums[i];
    }
    if (nums[i] > maxA) {
      maxA = nums[i];
    }
  }

  // define the sweep range [base .. base + rangeLen - 1]
  const base: number = minA - k;
  const end: number = maxA + k;
  const rangeLen: number = end - base + 1;

  // difference array to build "cover" (how many intervals cover each point)
  const diff: Int32Array = new Int32Array(rangeLen + 1);
  for (let i = 0; i < n; i++) {
    const l: number = nums[i] - k - base;
    const r: number = nums[i] + k - base;
    diff[l] += 1;
    if (r + 1 < diff.length) {
      diff[r + 1] -= 1;
    }
  }

  // prefix sum to get cover counts
  const cover: Int32Array = new Int32Array(rangeLen);
  let running: number = 0;
  for (let i = 0; i < rangeLen; i++) {
    running += diff[i];
    cover[i] = running;
  }

  // exact frequency of existing values
  const freq: Int32Array = new Int32Array(rangeLen);
  for (let i = 0; i < n; i++) {
    const idx: number = nums[i] - base;
    freq[idx] += 1;
  }

  // compute best over all candidate targets v in the sweep range
  let ans: number = 0;
  for (let i = 0; i < rangeLen; i++) {
    // you can convert at most numOperations elements, but cannot exceed how many intervals cover v
    const bestAtV: number = Math.min(cover[i], freq[i] + numOperations);
    if (bestAtV > ans) {
      ans = bestAtV;
    }
  }

  return ans;
}
