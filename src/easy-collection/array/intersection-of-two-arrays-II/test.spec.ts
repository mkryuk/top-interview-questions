import { intersect } from "./solution";

it("intersect should return [2,2] for nums1 = [1,2,2,1], nums2 = [2,2]", () => {
  const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
  const result = intersect(nums1, nums2);
  expect(result).toEqual([2, 2]);
});

it("intersect should return [4,9] for nums1 = [4,9,5], nums2 = [9,4,9,8,4]", () => {
  const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4];
  const result = intersect(nums1, nums2);
  expect(result).toEqual([4, 9]);
});

it("intersect should return [2,3,9,13] for nums1 = [2,2,2,3,3,9,9,13] nums2 = [2,3,9,13,13]", () => {
  const nums1 = [2, 2, 2, 3, 3, 9, 9, 13],
    nums2 = [2, 3, 9, 13, 13];
  const result = intersect(nums1, nums2);
  expect(result).toEqual([2, 3, 9, 13]);
});
