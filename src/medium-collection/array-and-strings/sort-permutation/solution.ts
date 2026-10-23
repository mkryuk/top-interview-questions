export function minOperations(nums: number[]): number {
  const n = nums.length;

  if (n <= 1) {
    return 0;
  }

  const zeroIndex = nums.indexOf(0);

  if (isIncreasingCycle(nums)) {
    const rotateLeft = zeroIndex;
    const rotateRight = n - zeroIndex + 2;
    return Math.min(rotateLeft, rotateRight);
  }

  if (isDecreasingCycle(nums)) {
    // reverse first:
    // zero moves from p to n - 1 - p
    const reverseFirst = 1 + (n - 1 - zeroIndex);
    // rotate first until zero is last, then reverse
    const rotateFirst = ((zeroIndex + 1) % n) + 1;
    return Math.min(reverseFirst, rotateFirst);
  }

  return -1;
}

function isIncreasingCycle(nums: number[]): boolean {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    const expected = (nums[i] + 1) % n;
    if (nums[next] !== expected) {
      return false;
    }
  }

  return true;
}

function isDecreasingCycle(nums: number[]): boolean {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    const expected = (nums[i] - 1 + n) % n;
    if (nums[next] !== expected) {
      return false;
    }
  }

  return true;
}
