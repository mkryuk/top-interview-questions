export function minSwaps(nums: number[]): number {
  const n = nums.length;
  const sums: number[] = nums.map(digitSum);
  const indices: number[] = Array.from({ length: n }, (_, i) => i);

  // sort original indices by digit sum and then by value
  indices.sort((a, b) => {
    if (sums[a] !== sums[b]) {
      return sums[a] - sums[b];
    }

    return nums[a] - nums[b];
  });

  const visited: boolean[] = new Array(n).fill(false);
  let swaps = 0;

  // each cycle of size k requires k - 1 swaps
  for (let i = 0; i < n; i++) {
    if (visited[i] || indices[i] === i) {
      continue;
    }

    let current = i;
    let cycleSize = 0;

    while (!visited[current]) {
      visited[current] = true;
      current = indices[current];
      cycleSize++;
    }

    swaps += cycleSize - 1;
  }

  return swaps;
}

function digitSum(num: number): number {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
