export function lastStoneWeightII(stones: number[]): number {
  // Calculate the total sum of the stones.
  const total = stones.reduce((acc, val) => acc + val, 0);

  // halfTotal is roughly half the total weight of the stones.
  // We'll try to find a subset of stones close to this value.
  const halfTotal = Math.floor(total / 2);

  // dp[i] will be true if there's a subset of stones that has sum i.
  // We initialize all values to false except dp[0],
  // because a subset with sum 0 is always possible (the empty subset).
  const dp: boolean[] = Array(halfTotal + 1).fill(false);
  dp[0] = true;

  // For each stone, we update our dp array to see which sums
  // can be formed if we include this stone in our subset.
  for (let stone of stones) {
    // Update dp array in reverse to avoid double counting.
    for (let i = halfTotal; i >= stone; i--) {
      // We can form sum j if we've formed j before
      // or we can form j - stone using previous stones.
      dp[i] = dp[i] || dp[i - stone];
    }
  }

  // After populating the dp array, we look for the largest value i
  // such that dp[i] is true. This represents the sum of one of the
  // two subsets we're trying to find.
  for (let i = halfTotal; i >= 0; i--) {
    if (dp[i]) {
      // The weight of the remaining stone will be the difference
      // between the total sum of stones and twice the sum of one subset.
      return total - 2 * i;
    }
  }

  // If no stone remains (though it shouldn't reach here given the problem constraints).
  return 0;
}
