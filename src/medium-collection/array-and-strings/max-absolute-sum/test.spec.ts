import { maxAbsoluteSum } from "./solution";

describe("Maximum Absolute Sum of Any Subarray", () => {
  it("maxAbsoluteSum should return 5 for nums = [1,-3,2,3,-4]", () => {
    const nums = [1, -3, 2, 3, -4];
    const result = maxAbsoluteSum(nums);
    expect(result).toEqual(5);
  });

  it("maxAbsoluteSum should return 8 for nums = [2,-5,1,-4,3,-2]", () => {
    const nums = [2, -5, 1, -4, 3, -2];
    const result = maxAbsoluteSum(nums);
    expect(result).toEqual(8);
  });
});
