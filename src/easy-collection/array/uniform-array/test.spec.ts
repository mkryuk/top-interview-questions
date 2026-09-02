import { uniformArray } from "./solution";

describe("3875. Construct Uniform Parity Array I:", () => {
  it("returns true for nums1 = [2,3]", () => {
    const nums1 = [2, 3];
    const result = uniformArray(nums1);
    expect(result).toBeTrue();
  });

  it("returns true for nums1 = [4,6]", () => {
    const nums1 = [4, 6];
    const result = uniformArray(nums1);
    expect(result).toBeTrue();
  });
});
