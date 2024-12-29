export function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
  const n = nums.length;
  // wLen = number of possible subarray starts
  const wLen = n - k + 1;

  // build the window-sum array w,
  // where w[i] = sum of nums[i..i+k-1].
  const w: number[] = new Array(wLen).fill(0);
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  w[0] = windowSum;
  for (let i = 1; i < wLen; i++) {
    windowSum += nums[i + k - 1] - nums[i - 1];
    w[i] = windowSum;
  }

  // build "left" array:
  // left[i] = index of the subarray in w[0..i] with the maximum sum.
  // if there's a tie, pick the smaller index.
  const left: number[] = new Array(wLen).fill(0);
  let bestLeft = 0;
  for (let i = 0; i < wLen; i++) {
    if (w[i] > w[bestLeft]) {
      bestLeft = i;
    }
    left[i] = bestLeft;
  }

  // build "right" array:
  // right[i] = index of the subarray in w[i..(wLen-1)] with the maximum sum.
  // if there's a tie, pick the smaller index.
  const right: number[] = new Array(wLen).fill(0);
  let bestRight = wLen - 1;
  for (let i = wLen - 1; i >= 0; i--) {
    // >= so we favor smaller indices when sums tie
    if (w[i] >= w[bestRight]) {
      bestRight = i;
    }
    right[i] = bestRight;
  }

  // try every possible middle subarray start j in [k .. wLen - k - 1].
  // then:
  // i = left[j - k] (best in [0.. j-k])
  // l = right[j + k] (best in [j+k.. end])
  // sum = w[i] + w[j] + w[l].
  // keep track of max sum (and lexicographically smallest if tie).
  let ans = [-1, -1, -1];
  let maxSumTotal = -1;

  // j goes up to wLen - k - 1 so that j+k is at most wLen-1
  for (let j = k; j <= wLen - k - 1; j++) {
    const i = left[j - k];
    const l = right[j + k];
    const total = w[i] + w[j] + w[l];
    if (total > maxSumTotal) {
      maxSumTotal = total;
      ans = [i, j, l];
    }
  }

  return ans;
}
