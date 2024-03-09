export function getCommon(nums1: number[], nums2: number[]): number {
  let index1 = 0;
  let index2 = 0;
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
      index1++;
    } else if (nums1[index1] > nums2[index2]) {
      index2++;
    } else {
      return nums1[index1];
    }
  }
  return -1;
}
