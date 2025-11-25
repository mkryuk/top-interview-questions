export function prefixesDivBy5(nums: number[]): boolean[] {
  let num = 0;
  let result: boolean[] = [];
  for (let i = 0; i < nums.length; i++) {
    num = (num * 2 + nums[i]) % 5;
    result.push(num === 0);
  }
  return result;
}
