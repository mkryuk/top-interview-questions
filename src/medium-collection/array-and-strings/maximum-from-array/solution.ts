function minimumDeletions(nums: number[]): number {
  const n = nums.length;

  let minIndex = 0;
  let maxIndex = 0;

  // find positions of minimum and maximum
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }

    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  const left = Math.min(minIndex, maxIndex);
  const right = Math.max(minIndex, maxIndex);

  // there are three possible optimal strategies:
  // 1. remove both from the front
  const fromFront = right + 1;

  // 2. remove both from the back
  const fromBack = n - left;

  // 3. remove one from each side
  const fromBothSides = left + 1 + n - right;

  return Math.min(fromFront, fromBack, fromBothSides);
}
