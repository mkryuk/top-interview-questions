import { findMedianSortedArrays } from "./solution";

it("findMedianSortedArrays should return 2.0 for nums1 = [1,3], nums2 = [2]", () => {
  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(2.0);
});

it("findMedianSortedArrays should return 2.5 for nums1 = [1,2], nums2 = [3,4]", () => {
  const nums1 = [1, 2];
  const nums2 = [3, 4];
  const result = findMedianSortedArrays(nums1, nums2);
  expect(result).toEqual(2.0);
});
