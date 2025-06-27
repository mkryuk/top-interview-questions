import { longestSubsequenceRepeatedK } from "./solution";

describe("2014. Longest Subsequence Repeated k Times", () => {
  it('longestSubsequenceRepeatedK should return "let" for s = "letsleetcode", k = 2', () => {
    const s = "letsleetcode";
    const k = 2;
    const result = longestSubsequenceRepeatedK(s, k);
    expect(result).toEqual("let");
  });

  it('longestSubsequenceRepeatedK should return "b" for s = "bb", k = 2', () => {
    const s = "bb";
    const k = 2;
    const result = longestSubsequenceRepeatedK(s, k);
    expect(result).toEqual("b");
  });

  it('longestSubsequenceRepeatedK should return "" for s = "ab", k = 2', () => {
    const s = "ab";
    const k = 2;
    const result = longestSubsequenceRepeatedK(s, k);
    expect(result).toEqual("");
  });
});
