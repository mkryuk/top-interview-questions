import { maxSubsequence } from "./solution";

describe("2099. Find Subsequence of Length K With the Largest Sum", () => {
  it("maxSubsequence should return [3,3] for nums = [2,1,3,3], k = 2", () => {
    const nums = [2, 1, 3, 3];
    const k = 2;
    const result = maxSubsequence(nums, k);
    expect(result).toEqual([3, 3]);
  });

  it("maxSubsequence should return [-1,3,4] for nums = [-1,-2,3,4], k = 3", () => {
    const nums = [-1, -2, 3, 4];
    const k = 3;
    const result = maxSubsequence(nums, k);
    expect(result).toEqual([-1, 3, 4]);
  });

  it("maxSubsequence should return [3,4] for nums = [3,4,3,3], k = 2", () => {
    const nums = [3, 4, 3, 3];
    const k = 2;
    const result = maxSubsequence(nums, k);
    expect(result).toEqual([3, 4]);
  });
});
