export function maximumEnergy(energy: number[], k: number): number {
  const n: number = energy.length;

  // dp[i] stores the forced sum if we start at i and jump by k until out of bounds
  const dp: number[] = new Array(n);

  // fill from right to left so that dp[i+k] is ready when needed
  for (let i: number = n - 1; i >= 0; i -= 1) {
    if (i + k < n) {
      dp[i] = energy[i] + dp[i + k];
    } else {
      dp[i] = energy[i];
    }
  }

  // compute the maximum over all possible starts
  let ans: number = -Infinity;
  for (let i: number = 0; i < n; i += 1) {
    if (dp[i] > ans) {
      ans = dp[i];
    }
  }

  return ans;
}
