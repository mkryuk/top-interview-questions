export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  backtrack(nums, 0, result);
  return result;
}

function backtrack(nums: number[], first: number, result: number[][]) {
  if (first === nums.length) {
    result.push([...nums]);
  }
  for (let i = first; i < nums.length; i++) {
    // place i-th integer first
    // in the current permutation
    swap(nums, first, i);
    // use next integers to complete the permutations
    backtrack(nums, first + 1, result);
    // backtrack
    swap(nums, first, i);
  }
}

function swap(nums: number[], i: number, j: number) {
  if (i === j) {
    return;
  }
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
