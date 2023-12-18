import { maxProductDifference } from "./solution-no-sort";

describe("Maximum Product Difference Between Two Pairs:", () => {
  it("maxProductDifference should return 34 for nums = [5,6,2,7,4]", () => {
    const nums = [5, 6, 2, 7, 4];
    const result = maxProductDifference(nums);
    expect(result).toEqual(34);
  });

  it("maxProductDifference should return 64 for nums = [4,2,5,9,7,4,8]", () => {
    const nums = [4, 2, 5, 9, 7, 4, 8];
    const result = maxProductDifference(nums);
    expect(result).toEqual(64);
  });
});
