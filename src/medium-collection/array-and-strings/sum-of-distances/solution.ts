export function distance(nums: number[]): number[] {
  const groups = new Map<number, number[]>();
  const result: number[] = new Array(nums.length).fill(0);

  // collect indices for each value

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value)!.push(i);
  }

  // process each group independently

  for (const positions of groups.values()) {
    const m = positions.length;
    if (m === 1) {
      continue;
    }

    const prefix: number[] = new Array(m + 1).fill(0);

    // build prefix sums of positions

    for (let i = 0; i < m; i++) {
      prefix[i + 1] = prefix[i] + positions[i];
    }

    for (let i = 0; i < m; i++) {
      const current = positions[i];
      // sum of distances to positions on the left
      const leftSum = current * i - prefix[i];
      // sum of distances to positions on the right
      const rightSum = prefix[m] - prefix[i + 1] - current * (m - i - 1);
      result[current] = leftSum + rightSum;
    }
  }

  return result;
}
