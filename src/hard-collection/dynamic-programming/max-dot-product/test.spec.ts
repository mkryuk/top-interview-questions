import { maxDotProduct } from "./solution";

describe("1458. Max Dot Product of Two Subsequences", () => {
  it("maxDotProduct should return 18 for nums1 = [2,1,-2,5], nums2 = [3,0,-6]", () => {
    const nums1 = [2, 1, -2, 5];
    const nums2 = [3, 0, -6];
    const result = maxDotProduct(nums1, nums2);
    expect(result).toEqual(18);
  });

  it("maxDotProduct should return 21 for nums1 = [3,-2], nums2 = [2,-6,7]", () => {
    const nums1 = [3, -2];
    const nums2 = [2, -6, 7];
    const result = maxDotProduct(nums1, nums2);
    expect(result).toEqual(21);
  });

  it("maxDotProduct should return -1 for nums1 = [-1,-1], nums2 = [1,1]", () => {
    const nums1 = [-1, -1];
    const nums2 = [1, 1];
    const result = maxDotProduct(nums1, nums2);
    expect(result).toEqual(-1);
  });
});
