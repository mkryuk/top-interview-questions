export function findSmallestInteger(nums: number[], value: number): number {
  // count occurrences by normalized remainder
  const cnt: number[] = new Array(Math.max(1, value)).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // normalize negative remainders into [0, value-1]
    const r: number = ((nums[i] % value) + value) % value;
    cnt[r] += 1;
  }

  // greedily build 0,1,2,... until we cannot
  let x: number = 0;
  while (true) {
    const r: number = x % value;
    if (cnt[r] > 0) {
      cnt[r] -= 1;
      x += 1;
    } else {
      return x;
    }
  }
}
