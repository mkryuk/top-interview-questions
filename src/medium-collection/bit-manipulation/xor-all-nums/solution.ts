export function xorAllNums(nums1: number[], nums2: number[]): number {
  let xorNums1 = 0;
  for (const num of nums1) {
    xorNums1 ^= num;
  }

  let xorNums2 = 0;
  for (const num of nums2) {
    xorNums2 ^= num;
  }

  // if nums1.length is odd, xorNums2 contributes
  // if nums2.length is odd, xorNums1 contributes
  let result = (nums1.length % 2 === 1 ? xorNums2 : 0) ^ (nums2.length % 2 === 1 ? xorNums1 : 0);
  return result;
}
