import { longestSubsequence } from "./solution";

describe("Longest Arithmetic Subsequence of Given Difference:", () => {
  it("longestSubsequence should return 4 for arr = [1,2,3,4], difference = 1", () => {
    const arr = [1, 2, 3, 4];
    const difference = 1;
    const result = longestSubsequence(arr, difference);
    expect(result).toEqual(4);
  });

  it("longestSubsequence should return 1 for arr = [1,3,5,7], difference = 1", () => {
    const arr = [1, 3, 5, 7];
    const difference = 1;
    const result = longestSubsequence(arr, difference);
    expect(result).toEqual(1);
  });

  it("longestSubsequence should return 4 for arr = [1,5,7,8,5,3,4,2,1], difference = -2", () => {
    const arr = [1, 5, 7, 8, 5, 3, 4, 2, 1];
    const difference = -2;
    const result = longestSubsequence(arr, difference);
    expect(result).toEqual(4);
  });

  it("longestSubsequence should return 2 for arr = [4,12,10,0,-2,7,-8,9,-9,-12,-12,8,8], difference = 0", () => {
    const arr = [4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8];
    const difference = 0;
    const result = longestSubsequence(arr, difference);
    expect(result).toEqual(2);
  });
});
