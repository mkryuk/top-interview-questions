import { subsequencePairCount } from "./solution";

describe("3336. Find the Number of Subsequences With Equal GCD:", () => {
  it("subsequencePairCount should return 10 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = subsequencePairCount(nums);
    expect(result).toEqual(10);
  });

  it("subsequencePairCount should return 2 for nums = [10,20,30]", () => {
    const nums = [10, 20, 30];
    const result = subsequencePairCount(nums);
    expect(result).toEqual(2);
  });

  it("subsequencePairCount should return 50 for nums = [1,1,1,1]", () => {
    const nums = [1, 1, 1, 1];
    const result = subsequencePairCount(nums);
    expect(result).toEqual(50);
  });
});
