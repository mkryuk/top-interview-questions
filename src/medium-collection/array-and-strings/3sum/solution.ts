export function threeSum(nums: number[]): number[][] {
  nums.sort();
  let result: number[][] = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    // skip equal numbers to avoid duplicate triples
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    twoSum(i, nums, result);
  }
  return result;
}

function twoSum(i: number, nums: number[], result: number[][]) {
  let hashMap = new Map();
  for (let j = i + 1; j < nums.length; j++) {
    if (hashMap.has(nums[j])) {
      result.push([nums[i], nums[hashMap.get(nums[j])], nums[j]]);
      // skip equal numbers to avoid duplicate triples
      while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
        j++;
      }
    }
    hashMap.set(0 - nums[i] - nums[j], j);
  }
}
