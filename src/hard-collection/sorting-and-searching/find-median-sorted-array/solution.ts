export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  let result = [];
  let i = 0;
  let k = 0;
  let j = 0;
  while (i < nums1.length && k < nums2.length) {
    if (nums1[i] < nums2[k]) {
      result[j++] = nums1[i++];
    } else {
      result[j++] = nums2[k++];
    }
  }
  while (i < nums1.length) {
    result[j++] = nums1[i++];
  }
  while (k < nums2.length) {
    result[j++] = nums2[k++];
  }
  const n = result.length;
  const mid = Math.trunc(n / 2);
  if (n % 2 !== 0) {
    return result[mid];
  }
  return (result[mid - 1] + result[mid]) / 2;
}
