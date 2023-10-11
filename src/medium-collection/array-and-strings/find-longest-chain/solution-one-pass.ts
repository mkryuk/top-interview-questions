export function findLongestChain(pairs: number[][]): number {
  // Sort pairs based on their second element
  pairs.sort((a, b) => a[1] - b[1]);

  let result = 0;
  let currentEnd = -Infinity; // Use -Infinity as initial value so that first pair is always included

  for (let pair of pairs) {
    if (currentEnd < pair[0]) {
      // If current end is less than the start of the new pair,
      // then the new pair can be added to the chain.
      currentEnd = pair[1];
      result++;
    }
  }

  return result;
}
