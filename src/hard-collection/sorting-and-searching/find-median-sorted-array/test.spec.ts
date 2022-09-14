import { findMedianSortedArrays } from "./solution";

it("findMedianSortedArrays should return 2 for nums1 = [1,3], nums2 = [2]", () => {
  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(2);
});

it("findMedianSortedArrays should return 2.5 for nums1 = [1,2], nums2 = [3,4]", () => {
  const nums1 = [1, 2];
  const nums2 = [3, 4];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(2.5);
});

it("findMedianSortedArrays should return 5 for nums1 = [1,3,11] nums2 = [-2,7,12]", () => {
  const nums1 = [1, 3, 11];
  const nums2 = [-2, 7, 12];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(5);
});

it("findMedianSortedArrays should return 3.5 for nums1 = [1,3,42] nums2 = [2,4,5]", () => {
  const nums1 = [1, 3, 42];
  const nums2 = [2, 4, 5];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(3.5);
});

it("findMedianSortedArrays should return 3 for nums1 = [1,3,42] nums2 = [2,4]", () => {
  const nums1 = [1, 3, 42];
  const nums2 = [2, 4];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(3);
});
