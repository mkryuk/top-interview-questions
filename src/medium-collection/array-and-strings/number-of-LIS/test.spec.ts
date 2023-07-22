import { findNumberOfLIS } from "./solution";

describe("Number of Longest Increasing Subsequence:", () => {
  it("findNumberOfLIS should return 2 for nums = [1,3,5,4,7]", () => {
    const nums = [1, 3, 5, 4, 7];
    const result = findNumberOfLIS(nums);
    expect(result).toEqual(2);
  });

  it("findNumberOfLIS should return 5 for nums = [2,2,2,2,2]", () => {
    const nums = [2, 2, 2, 2, 2];
    const result = findNumberOfLIS(nums);
    expect(result).toEqual(5);
  });

  it("findNumberOfLIS should return 3 for nums = [1,2,4,3,5,4,7,2]", () => {
    const nums = [1, 2, 4, 3, 5, 4, 7, 2];
    const result = findNumberOfLIS(nums);
    expect(result).toEqual(3);
  });
});
