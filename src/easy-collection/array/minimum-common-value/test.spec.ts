import { getCommon } from "./solution";

describe("Minimum Common Value:", () => {
  it("getCommon should return 2 for nums1 = [1,2,3], nums2 = [2,4]", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [2, 4];
    const result = getCommon(nums1, nums2);
    expect(result).toEqual(2);
  });

  it("getCommon should return 2 for nums1 = [1,2,3,6], nums2 = [2,3,4,5]", () => {
    const nums1 = [1, 2, 3, 6];
    const nums2 = [2, 3, 4, 5];
    const result = getCommon(nums1, nums2);
    expect(result).toEqual(2);
  });
});
