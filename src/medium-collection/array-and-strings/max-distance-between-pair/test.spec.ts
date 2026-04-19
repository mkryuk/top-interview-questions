import { maxDistance } from "./solution";

describe("1855. Maximum Distance Between a Pair of Values:", () => {
  it("maxDistance should return 2 for nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]", () => {
    const nums1 = [55, 30, 5, 4, 2];
    const nums2 = [100, 20, 10, 10, 5];
    const result = maxDistance(nums1, nums2);
    expect(result).toEqual(2);
  });

  it("maxDistance should return 1 for nums1 = [2,2,2], nums2 = [10,10,1]", () => {
    const nums1 = [2, 2, 2];
    const nums2 = [10, 10, 1];
    const result = maxDistance(nums1, nums2);
    expect(result).toEqual(1);
  });

  it("maxDistance should return 2 for nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]", () => {
    const nums1 = [30, 29, 19, 5];
    const nums2 = [25, 25, 25, 25, 25];
    const result = maxDistance(nums1, nums2);
    expect(result).toEqual(2);
  });
});
