import { minSum } from "./solution";

describe("Minimum Equal Sum of Two Arrays After Replacing Zeros", () => {
  it("minSum should return 12 for nums1 = [3,2,0,1,0], nums2 = [6,5,0]", () => {
    const nums1 = [3, 2, 0, 1, 0];
    const nums2 = [6, 5, 0];
    const result = minSum(nums1, nums2);
    expect(result).toEqual(12);
  });

  it("minSum should return -1 for nums1 = [2,0,2,0], nums2 = [1,4]", () => {
    const nums1 = [2, 0, 2, 0];
    const nums2 = [1, 4];
    const result = minSum(nums1, nums2);
    expect(result).toEqual(-1);
  });
});
