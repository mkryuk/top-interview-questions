import { longestSubsequence } from "./solution";

describe("2311. Longest Binary Subsequence Less Than or Equal to K", () => {
  it('longestSubsequence should return 5 for s = "1001010", k = 5', () => {
    const s = "1001010";
    const k = 5;
    const result = longestSubsequence(s, k);
    expect(result).toEqual(5);
  });

  it('longestSubsequence should return 6 for s = "00101001", k = 1', () => {
    const s = "00101001";
    const k = 1;
    const result = longestSubsequence(s, k);
    expect(result).toEqual(6);
  });
});
