export function beautifulSubsets(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const maxNum = nums[nums.length - 1];
  const freqMap = new Array(maxNum + 1).fill(0);
  const result = countBeautifulSubsets(nums, k, freqMap, 0);
  return result - 1;
}

function countBeautifulSubsets(
  nums: number[],
  difference: number,
  frequencyMap: number[],
  index: number,
): number {
  if (index === nums.length) {
    return 1;
  }
  let count = countBeautifulSubsets(nums, difference, frequencyMap, index + 1);
  if (!frequencyMap[nums[index] - difference]) {
    frequencyMap[nums[index]]++;
    count += countBeautifulSubsets(nums, difference, frequencyMap, index + 1);
    frequencyMap[nums[index]]--;
  }
  return count;
}
