import { findLHS } from "./solution";

describe("594. Longest Harmonious Subsequence", () => {
  it("findLHS should return 5 for nums = [1,3,2,2,5,2,3,7]", () => {
    const nums = [1, 3, 2, 2, 5, 2, 3, 7];
    const result = findLHS(nums);
    expect(result).toEqual(5);
  });

  it("findLHS should return 2 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = findLHS(nums);
    expect(result).toEqual(2);
  });

  it("findLHS should return 0 for nums = [1,1,1,1]", () => {
    const nums = [1, 1, 1, 1];
    const result = findLHS(nums);
    expect(result).toEqual(0);
  });
});
