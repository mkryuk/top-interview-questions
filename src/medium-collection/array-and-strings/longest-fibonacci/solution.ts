export function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length;
  const index = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    index.set(arr[i], i);
  }

  // initialize dp table with 2's because any two numbers can start a sequence.
  const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(2));
  let maxLen = 0;

  // loop over each pair (i, j) with i < j
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const potentialPrev = arr[j] - arr[i];
      // because the array is strictly increasing, potentialPrev must be less than arr[i]
      if (potentialPrev >= arr[i]) {
        continue;
      }
      // check if the potential previous number exists in the array
      if (index.has(potentialPrev)) {
        const k = index.get(potentialPrev)!;
        // only consider valid indices k that come before i
        if (k < i) {
          dp[i][j] = dp[k][i] + 1;
          maxLen = Math.max(maxLen, dp[i][j]);
        }
      }
    }
  }

  // a valid Fibonacci-like sequence must have length >= 3.
  return maxLen >= 3 ? maxLen : 0;
}
