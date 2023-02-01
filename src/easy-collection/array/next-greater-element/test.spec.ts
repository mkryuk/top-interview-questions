import { nextGreaterElement } from "./solution";

it("nextGreaterElement should return [-1,3,-1] for nums1 = [4,1,2], nums2 = [1,3,4,2]", () => {
  const nums1 = [4, 1, 2];
  const nums2 = [1, 3, 4, 2];
  const result = nextGreaterElement(nums1, nums2);
  expect(result).toEqual([-1, 3, -1]);
});

it("nextGreaterElement should return [3,-1] for nums1 = [2,4], nums2 = [1,2,3,4]", () => {
  const nums1 = [2, 4];
  const nums2 = [1, 2, 3, 4];
  const result = nextGreaterElement(nums1, nums2);
  expect(result).toEqual([3, -1]);
});
