export function maxProduct(nums: number[]): number {
  let { result } = dfs(nums, 0);
  return result;
}

function dfs(nums: number[], i: number): { min: number; max: number; result: number } {
  let curr = nums[i];
  if (i === nums.length - 1) {
    return {
      max: curr,
      min: curr,
      result: curr,
    };
  }

  const temp = dfs(nums, i + 1);
  const minProd = temp.min * curr;
  const maxProd = temp.max * curr;
  temp.max = Math.max(curr, minProd, maxProd);
  temp.min = Math.min(curr, minProd, maxProd);
  temp.result = Math.max(temp.max, temp.min, temp.result);
  return temp;
}
