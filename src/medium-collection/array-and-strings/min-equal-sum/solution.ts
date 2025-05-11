export function minSum(nums1: number[], nums2: number[]): number {
  // count sum and zeroes for nums1
  let num1Zeroes = 0;
  let num1Sum = 0;
  for (const num of nums1) {
    if (num === 0) {
      num1Zeroes++;
      // count all zeroes as 1
      num1Sum++;
    }
    num1Sum += num;
  }
  // count sum and zeroes for nums2
  let num2Zeroes = 0;
  let num2Sum = 0;
  for (const num of nums2) {
    if (num === 0) {
      num2Zeroes++;
      // count all zeroes as 1
      num2Sum++;
    }
    num2Sum += num;
  }

  if ((num1Sum > num2Sum && num2Zeroes === 0) || (num2Sum > num1Sum && num1Zeroes === 0)) {
    return -1;
  }

  return Math.max(num1Sum, num2Sum);
}
