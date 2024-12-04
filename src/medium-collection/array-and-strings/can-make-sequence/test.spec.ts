import { canMakeSubsequence } from "./solution";

describe("Make String a Subsequence Using Cyclic Increments", () => {
  it('canMakeSubsequence should return true for str1 = "abc", str2 = "ad"', () => {
    const str1 = "abc";
    const str2 = "ad";
    const result = canMakeSubsequence(str1, str2);
    expect(result).toBeTrue();
  });

  it('canMakeSubsequence should return true for str1 = "zc", str2 = "ad"', () => {
    const str1 = "zc";
    const str2 = "ad";
    const result = canMakeSubsequence(str1, str2);
    expect(result).toBeTrue();
  });

  it('canMakeSubsequence should return false for str1 = "ab", str2 = "d"', () => {
    const str1 = "ab";
    const str2 = "d";
    const result = canMakeSubsequence(str1, str2);
    expect(result).toBeFalse();
  });
});
