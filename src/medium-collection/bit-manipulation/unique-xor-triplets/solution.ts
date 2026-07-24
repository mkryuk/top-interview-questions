export function uniqueXorTriplets(nums: number[]): number {
  const n: number = nums.length;
  if (n <= 2) {
    return n;
  }

  let result: number = 1;

  // find the smallest power of two strictly greater than n
  while (result <= n) {
    result *= 2;
  }

  return result;
}
