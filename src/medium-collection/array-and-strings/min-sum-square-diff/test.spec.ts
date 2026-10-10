import { minSumSquareDiff } from "./solution";

describe("2333. Minimum Sum of Squared Difference:", () => {
  it("minSumSquareDiff should return 579 for nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0", () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [2, 10, 20, 19];
    const k1 = 0;
    const k2 = 0;
    const result = minSumSquareDiff(nums1, nums2, k1, k2);
    expect(result).toEqual(579);
  });

  it("minSumSquareDiff should return 43 for nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1", () => {
    const nums1 = [1, 4, 10, 12];
    const nums2 = [5, 8, 6, 9];
    const k1 = 1;
    const k2 = 1;
    const result = minSumSquareDiff(nums1, nums2, k1, k2);
    expect(result).toEqual(43);
  });
});
