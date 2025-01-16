import { xorAllNums } from "./solution";

describe("Bitwise XOR of All Pairings", () => {
  it("xorAllNums should return 13 for nums1 = [2,1,3], nums2 = [10,2,5,0]", () => {
    const nums1 = [2, 1, 3];
    const nums2 = [10, 2, 5, 0];
    const result = xorAllNums(nums1, nums2);
    expect(result).toEqual(13);
  });

  it("xorAllNums should return 0 for nums1 = [1,2], nums2 = [3,4]", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = xorAllNums(nums1, nums2);
    expect(result).toEqual(0);
  });
});
