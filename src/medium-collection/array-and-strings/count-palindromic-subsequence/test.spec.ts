import { countPalindromicSubsequence } from "./solution";

describe("Unique Length-3 Palindromic Subsequences:", () => {
  it('countPalindromicSubsequence should return 3 for s = "aabca"', () => {
    const s = "aabca";
    const result = countPalindromicSubsequence(s);
    expect(result).toEqual(3);
  });

  it('countPalindromicSubsequence should return 0 for s = "adc"', () => {
    const s = "adc";
    const result = countPalindromicSubsequence(s);
    expect(result).toEqual(0);
  });

  it('countPalindromicSubsequence should return 4 for s = "bbcbaba"', () => {
    const s = "bbcbaba";
    const result = countPalindromicSubsequence(s);
    expect(result).toEqual(4);
  });
});
