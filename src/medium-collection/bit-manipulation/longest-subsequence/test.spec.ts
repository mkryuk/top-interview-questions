import { longestSubsequence } from "./solution";

describe("3702. Longest Subsequence With Non-Zero Bitwise XOR:", () => {
  it("longestSubsequence should return 2 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = longestSubsequence(nums);
    expect(result).toEqual(2);
  });

  it("longestSubsequence should return 3 for nums = [2,3,4]", () => {
    const nums = [2, 3, 4];
    const result = longestSubsequence(nums);
    expect(result).toEqual(3);
  });
});
