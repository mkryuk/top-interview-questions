import { intersection } from "./solution";

describe("Intersection of Two Arrays:", () => {
  it("intersection should return [2] for nums1 = [1,2,2,1], nums2 = [2,2]", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const result = intersection(nums1, nums2);
    expect(result).toEqual([2]);
  });

  it("intersection should return [9,4] for nums1 = [4,9,5], nums2 = [9,4,9,8,4]", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const result = intersection(nums1, nums2);
    expect(result).toEqual([9, 4]);
  });
});
