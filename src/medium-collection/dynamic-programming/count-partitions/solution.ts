export function countPartitions(nums: number[], k: number): number {
  const MOD: number = 1e9 + 7;
  const n: number = nums.length;

  // dp[i] = number of ways to partition first i elements (nums[0..i-1])
  const dp: number[] = new Array(n + 1).fill(0);
  // pre[i] = prefix sum of dp: dp[0] + ... + dp[i]
  const pre: number[] = new Array(n + 1).fill(0);

  dp[0] = 1;
  pre[0] = 1;

  // deques store indices, not values
  const maxDeque: number[] = [];
  const minDeque: number[] = [];

  // left pointer of the sliding window in terms of nums indices
  let left: number = 0;

  for (let right = 0; right < n; right++) {
    // maintain decreasing deque for maximum
    while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // maintain increasing deque for minimum
    while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    // shrink window from the left while max - min > k
    while (maxDeque.length > 0 && minDeque.length > 0 && nums[maxDeque[0]] - nums[minDeque[0]] > k) {
      if (maxDeque[0] === left) {
        maxDeque.shift();
      }
      if (minDeque[0] === left) {
        minDeque.shift();
      }
      left++;
    }

    // now all segments [s..right] with s in [left, right] are valid
    const i: number = right + 1; // prefix length index

    if (left === 0) {
      // sum dp[0..right] = pre[right]
      dp[i] = pre[right];
    } else {
      // sum dp[left..right] = pre[right] - pre[left - 1]
      let val: number = pre[right] - pre[left - 1];
      if (val < 0) {
        val += MOD;
      }
      dp[i] = val;
    }

    pre[i] = pre[i - 1] + dp[i];
    if (pre[i] >= MOD) {
      pre[i] -= MOD;
    }
  }

  return dp[n] % MOD;
}
