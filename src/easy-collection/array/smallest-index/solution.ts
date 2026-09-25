export function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (digitSum(nums[i]) === i) {
      return i;
    }
  }
  return -1;
}

function digitSum(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit;
    n = Math.trunc(n / 10);
  }
  return sum;
}
