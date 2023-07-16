export function longestSubsequence(arr: number[], difference: number): number {
  // The map is used to store the state of our dynamic programming problem. The key of the map is the
  // number from the array and the value is the length of the longest arithmetic subsequence that ends
  // with that number.
  let dp = new Map<number, number>();

  // This variable keeps track of the length of the longest subsequence that we've found so far.
  // It's initially set to 1 because a subsequence can be a single number.
  let result = 1;

  for (const item of arr) {
    // We calculate the previous number in the arithmetic subsequence based on the current number and
    // the difference. We then look up in our dynamic programming state to see if there's a
    // subsequence that ends with the previous number. If there is, we get the length of that
    // subsequence, otherwise we default to 0.
    let prevCount = dp.get(item - difference) ?? 0;

    // We update our dynamic programming state by setting the length of the longest subsequence that
    // ends with the current number. If there was a subsequence that ended with the previous number,
    // we continue that subsequence; otherwise we start a new subsequence of length 1.
    dp.set(item, prevCount + 1);

    // We check if the subsequence that ends with the current number is the longest one we've found so far.
    result = Math.max(result, dp.get(item)!);
  }

  // We return the length of the longest arithmetic subsequence we've found.
  return result;
}
