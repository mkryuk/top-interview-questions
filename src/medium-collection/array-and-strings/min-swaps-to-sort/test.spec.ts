import { minSwaps } from "./solution";

describe("3551. Minimum Swaps to Sort by Digit Sum:", () => {
  it("minSwaps should return 1 for nums = [37,100]", () => {
    const nums = [37, 100];
    const result = minSwaps(nums);
    expect(result).toEqual(1);
  });

  it("minSwaps should return 0 for nums = [22,14,33,7]", () => {
    const nums = [22, 14, 33, 7];
    const result = minSwaps(nums);
    expect(result).toEqual(0);
  });

  it("minSwaps should return 2 for nums = [18,43,34,16]", () => {
    const nums = [18, 43, 34, 16];
    const result = minSwaps(nums);
    expect(result).toEqual(2);
  });
});
