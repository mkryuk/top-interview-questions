export function findMaxLength(nums: number[]): number {
  let result = 0;
  // initialize with 0 at the index -1
  let map = new Map<number, number>([[0, -1]]);
  let prefixSum = 0;
  for (let index = 0; index < nums.length; index++) {
    prefixSum += nums[index] === 1 ? 1 : -1;
    if (map.has(prefixSum)) {
      result = Math.max(result, index - map.get(prefixSum)!);
    } else {
      map.set(prefixSum, index);
    }
  }
  return result;
}
