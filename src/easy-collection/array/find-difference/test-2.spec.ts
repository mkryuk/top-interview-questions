import { findDifference } from "./solution-2";

describe("Find the Difference of Two Arrays", () => {
  it("findDifference should return [[1,3],[4,6]] for nums1 = [1,2,3], nums2 = [2,4,6]", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [2, 4, 6];
    const result = findDifference(nums1, nums2);
    expect(result).toEqual([
      [1, 3],
      [4, 6],
    ]);
  });

  it("findDifference should return [[3],[]] for nums1 = [1,2,3,3], nums2 = [1,1,2,2]", () => {
    const nums1 = [1, 2, 3, 3];
    const nums2 = [1, 1, 2, 2];
    const result = findDifference(nums1, nums2);
    expect(result).toEqual([[3], []]);
  });
});
