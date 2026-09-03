import { uniformArray } from "./solution";

describe("3876. Construct Uniform Parity Array II:", () => {
  it("uniformArray should return true for nums1 = [1,4,7]", () => {
    const nums1 = [1, 4, 7];
    const result = uniformArray(nums1);
    expect(result).toEqual(true);
  });

  it("uniformArray should return false for nums1 = [2,3]", () => {
    const nums1 = [2, 3];
    const result = uniformArray(nums1);
    expect(result).toEqual(false);
  });

  it("uniformArray should return true for nums1 = [4,6]", () => {
    const nums1 = [4, 6];
    const result = uniformArray(nums1);
    expect(result).toEqual(true);
  });
});
