export function minimumMountainRemovals(nums: number[]): number {
  const n = nums.length;
  const lis: number[] = new Array(n).fill(1);
  const lds: number[] = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && lis[j] + 1 > lis[i]) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j] && lds[j] + 1 > lds[i]) {
        lds[i] = lds[j] + 1;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (lis[i] >= 2 && lds[i] >= 2) {
      result = Math.max(result, lis[i] + lds[i] - 1);
    }
  }
  return n - result;
}
