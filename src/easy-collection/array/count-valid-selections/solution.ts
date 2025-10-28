export function countValidSelections(nums: number[]): number {
  let count: number = 0;
  const nonZeros: number = nums.filter((x: number) => x > 0).length;
  const n: number = nums.length;

  for (let i: number = 0; i < n; i += 1) {
    if (nums[i] === 0) {
      if (simulate([...nums], nonZeros, i, -1) === true) {
        count += 1;
      }
      if (simulate([...nums], nonZeros, i, +1) === true) {
        count += 1;
      }
    }
  }

  return count;
}

function simulate(nums: number[], nonZeros: number, start: number, direction: number): boolean {
  while (nonZeros > 0 && start >= 0 && start < nums.length) {
    if (nums[start] > 0) {
      nums[start] -= 1;
      direction = -direction;
      if (nums[start] === 0) {
        nonZeros -= 1;
      }
    }
    start += direction;
  }

  return nonZeros === 0;
}
