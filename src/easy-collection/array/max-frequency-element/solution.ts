export function maxFrequencyElements(nums: number[]): number {
  let frequencyMap = new Map<number, number>();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
  }

  let maxCount = 0;
  for (const [num, count] of frequencyMap) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  let result = 0;
  for (const [num, count] of frequencyMap) {
    if (count === maxCount) {
      result += count;
    }
  }

  return result;
}
