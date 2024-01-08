export function numberOfArithmeticSlices(nums: number[]): number {
  let count = 0;
  let n = nums.length;

  // A 2D array to hold the counts of arithmetic sequences ending at each index with a given difference.
  let dp: Map<number, number>[] = new Array(n).fill(0).map(() => new Map());

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // Calculate the difference between the current and previous element.
      let diff = nums[i] - nums[j];

      // If the difference is too large to fit in a 32-bit integer, skip.
      if (diff <= -Math.pow(2, 31) || diff >= Math.pow(2, 31)) {
        continue;
      }

      // Count of arithmetic sequences ending at j with a difference of 'diff'.
      let sequencesEndingAtJ = dp[j].get(diff) || 0;

      // Count of arithmetic sequences ending at i with a difference of 'diff'.
      let sequencesEndingAtI = dp[i].get(diff) || 0;

      // Add the count from j to i, and also add to the total count of arithmetic sequences.
      dp[i].set(diff, sequencesEndingAtI + sequencesEndingAtJ + 1);

      // Update the total count. We add 'sequencesEndingAtJ' because we are looking for subsequences with at least 3 numbers.
      count += sequencesEndingAtJ;
    }
  }

  return count;
}
