export function maxDistance(nums1: number[], nums2: number[]): number {
  let i = 0;
  let j = 0;
  let result = 0;

  while (i < nums1.length && j < nums2.length) {
    if (i > j) {
      j++;
      continue;
    }

    if (nums1[i] <= nums2[j]) {
      result = Math.max(result, j - i);
      j++;
    } else {
      i++;
    }
  }

  return result;
}
