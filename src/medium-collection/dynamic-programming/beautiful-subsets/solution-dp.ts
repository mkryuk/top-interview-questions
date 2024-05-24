export function beautifulSubsets(nums: number[], k: number): number {
  let totalCount = 1;
  const freqMap: Map<number, Map<number, number>> = new Map();

  // Calculate frequencies based on remainder
  for (const num of nums) {
    const remainder = num % k;
    if (!freqMap.has(remainder)) {
      freqMap.set(remainder, new Map());
    }
    const fr = freqMap.get(remainder)!;
    fr.set(num, (fr.get(num) || 0) + 1);
  }

  // Iterate through each remainder group
  for (const fr of freqMap.values()) {
    let prevNum = -k;
    let prev2 = 0;
    let prev1 = 1;
    let curr = 1;

    // Iterate through each number in the current remainder group
    const sortedEntries = Array.from(fr.entries()).sort((a, b) => a[0] - b[0]);
    for (const [num, freq] of sortedEntries) {
      // Count of subsets skipping the current number
      const skip = prev1;

      // Count of subsets including the current number
      // Check if the current number and the previous number
      // form a beautiful pair
      let take;
      if (num - prevNum === k) {
        take = ((1 << freq) - 1) * prev2;
      } else {
        take = ((1 << freq) - 1) * prev1;
      }

      // Store the total count for the current number
      curr = skip + take;
      prev2 = prev1;
      prev1 = curr;
      prevNum = num;
    }
    totalCount *= curr;
  }
  return totalCount - 1; // Exclude the empty subset
}
