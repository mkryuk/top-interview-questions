export function putMarbles(weights: number[], k: number): number {
  const n = weights.length;

  // calculate the extra cost for each possible cut between adjacent marbles.
  const pairs = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    pairs[i] = weights[i] + weights[i + 1];
  }
  pairs.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;
  // choose k-1 smallest sums for the minimal score.
  // choose k-1 largest sums for the maximal score.
  for (let i = 0; i < k - 1; i++) {
    minSum += pairs[i];
    maxSum += pairs[pairs.length - 1 - i];
  }

  // the base score (when k = 1) cancels out in the difference.
  return maxSum - minSum;
}
