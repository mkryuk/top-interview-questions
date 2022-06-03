// Because the while loop is reached only
// when currentNum marks the beginning of a sequence
// (i.e. currentNum - 1 is not present in nums),
// the while loop can only run for n iterations
// throughout the entire runtime of the algorithm.
// This means that despite looking like O(n * n) complexity,
// the nested loops actually run in O(n + n) = O(n) time.
// All other computations occur in constant time, so the overall runtime is linear.
export function longestConsecutive(nums: number[]): number {
  let set = new Set<number>(nums);
  let result = 0;
  set.forEach((num) => {
    // if this is the beginning of the sequence
    if (!set.has(num - 1)) {
      let currentNum = num;
      let tempResult = 1;
      while (set.has(currentNum + 1)) {
        tempResult++;
        currentNum++;
      }
      result = Math.max(result, tempResult);
    }
  });
  return result;
}
