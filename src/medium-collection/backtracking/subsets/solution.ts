export function subsets(nums: number[]): number[][] {
  let item = nums.shift();
  if (item === undefined) {
    return [[]];
  }
  let result = subsets(nums);
  let length = result.length;
  for (let i = 0; i < length; i++) {
    result.push([item, ...result[i]]);
  }
  return result;
}
