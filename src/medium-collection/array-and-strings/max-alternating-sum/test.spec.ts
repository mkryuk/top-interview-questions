import { maxAlternatingSum } from "./solution";

describe("3727. Maximum Alternating Sum of Squares:", () => {
  it("maxAlternatingSum should return 12 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = maxAlternatingSum(nums);
    expect(result).toEqual(12);
  });

  it("maxAlternatingSum should return 16 for nums = [1,-1,2,-2,3,-3]", () => {
    const nums = [1, -1, 2, -2, 3, -3];
    const result = maxAlternatingSum(nums);
    expect(result).toEqual(16);
  });
});
