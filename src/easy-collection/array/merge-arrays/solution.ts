export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = [];
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < nums1.length && ptr2 < nums2.length) {
    if (nums1[ptr1][0] === nums2[ptr2][0]) {
      result.push([nums1[ptr1][0], nums1[ptr1][1] + nums2[ptr2][1]]);
      ptr1++;
      ptr2++;
    } else if (nums1[ptr1][0] < nums2[ptr2][0]) {
      result.push(nums1[ptr1]);
      ptr1++;
    } else {
      result.push(nums2[ptr2]);
      ptr2++;
    }
  }
  while (ptr1 < nums1.length) {
    result.push(nums1[ptr1]);
    ptr1++;
  }
  while (ptr2 < nums2.length) {
    result.push(nums2[ptr2]);
    ptr2++;
  }
  return result;
}
