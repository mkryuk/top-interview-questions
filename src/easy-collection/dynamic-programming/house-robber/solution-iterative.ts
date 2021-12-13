export function rob(nums: number[]): number {
  let N = nums.length;
  let memo = new Array(N + 1);
  // if there are no houses there nothing to rob
  memo[N] = 0;
  // if this is the last house let's rob it
  memo[N - 1] = nums[N - 1];
  for (let i = N - 2; i >= 0; i--) {
    // we choose to rob the next house and maximum from that line memo[i + 1]
    // or rob this one and the maximum from current line memo[i + 2] + nums[i]
    // store the maximum from our choice
    memo[i] = Math.max(memo[i + 1], memo[i + 2] + nums[i]);
  }
  // we know the every rob for every house
  // and return the maximum that obviously at the beginning (the more houses the more to rob)
  return memo[0];
}
