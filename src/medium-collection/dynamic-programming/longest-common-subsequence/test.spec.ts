import { longestCommonSubsequence } from "./solution";

describe("Longest Common Subsequence:", () => {
  it('longestCommonSubsequence should return 3 for text1 = "abcde", text2 = "ace"', () => {
    const text1 = "abcde";
    const text2 = "ace";
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toEqual(3);
  });

  it('longestCommonSubsequence should return 3 for text1 = "abc", text2 = "abc"', () => {
    const text1 = "abc";
    const text2 = "abc";
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toEqual(3);
  });

  it('longestCommonSubsequence should return 0 for text1 = "abc", text2 = "def"', () => {
    const text1 = "abc";
    const text2 = "def";
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toEqual(0);
  });
});
