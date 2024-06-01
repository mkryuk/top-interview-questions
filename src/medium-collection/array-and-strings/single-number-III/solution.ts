export function singleNumber(nums: number[]): number[] {
  let totalXor = 0;
  for (const num of nums) {
    totalXor ^= num;
  }
  let num1 = 0;
  let num2 = 0;
  let lastBit = totalXor & -totalXor;
  for (const num of nums) {
    if ((num & lastBit) !== 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
}
