export function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let result = -1;
  let prevSum = 0;
  for (let num of nums) {
    if (num < prevSum) {
      result = prevSum + num;
    }
    prevSum += num;
  }
  return result;
}
