export function twoSum(numbers: number[], target: number): number[] {
  let low = 0,
    high = numbers.length - 1;
  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum < target) {
      low++;
    } else if (sum > target) {
      high--;
    } else {
      return [low + 1, high + 1];
    }
  }
  return [-1, -1];
}
