export function countBadPairs(nums: number[]): number {
  const frequencyMap = new Map<number, number>();
  const n = nums.length;
  let goodPairs = 0;
  for (let i = 0; i < n; i++) {
    // j - i != nums[j] - nums[i] is the same as nums[i] - i != nums[j] - j.
    const diff = nums[i] - i;
    if (frequencyMap.has(diff)) {
      goodPairs += frequencyMap.get(diff)!;
      frequencyMap.set(diff, frequencyMap.get(diff)! + 1);
    } else {
      frequencyMap.set(diff, 1);
    }
  }
  const totalPairs = (n * (n - 1)) / 2;
  return totalPairs - goodPairs;
}
