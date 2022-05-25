import { fourSumCount } from "./solution";

it("fourSumCount should return 2 for nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]", () => {
  const nums1 = [1, 2];
  const nums2 = [-2, -1];
  const nums3 = [-1, 2];
  const nums4 = [0, 2];
  expect(fourSumCount(nums1, nums2, nums3, nums4)).toBe(2);
});

it("fourSumCount should return 1 for nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]", () => {
  const nums1 = [0];
  const nums2 = [0];
  const nums3 = [0];
  const nums4 = [0];
  expect(fourSumCount(nums1, nums2, nums3, nums4)).toBe(1);
});

it("fourSumCount should return 0 for nums1 = [1], nums2 = [-1], nums3 = [0], nums4 = [1]", () => {
  const nums1 = [1];
  const nums2 = [-1];
  const nums3 = [0];
  const nums4 = [1];
  expect(fourSumCount(nums1, nums2, nums3, nums4)).toBe(0);
});

it("fourSumCount should return 0 for nums1 = [-1,-1], nums2 = [-1,1], nums3 = [-1,1], nums4 = [1,-1]", () => {
  const nums1 = [-1, -1];
  const nums2 = [-1, 1];
  const nums3 = [-1, 1];
  const nums4 = [1, -1];
  expect(fourSumCount(nums1, nums2, nums3, nums4)).toBe(6);
});
