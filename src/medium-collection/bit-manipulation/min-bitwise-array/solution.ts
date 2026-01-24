export function minBitwiseArray(nums: number[]): number[] {
  const result: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    const p: number = nums[i];
    // only even prime is 2, and it has no solution
    if (p === 2) {
      result.push(-1);
      continue;
    }

    const t: number = trailingOnesCount(p);
    const k: number = t - 1;
    const sub: number = 1 << k;

    result.push(p - sub);
  }

  return result;
}

function trailingOnesCount(n: number): number {
  let count: number = 0;

  while ((n & 1) === 1) {
    count++;
    n = n >>> 1;
  }

  return count;
}
