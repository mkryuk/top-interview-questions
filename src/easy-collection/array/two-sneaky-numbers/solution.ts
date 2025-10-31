export function getSneakyNumbers(nums: number[]): number[] {
  const numCount = new Array(nums.length).fill(0);
  const result: number[] = [];
  for (const num of nums) {
    numCount[num]++;
    if (numCount[num] > 1) {
      result.push(num);
    }
  }
  return result;
}
