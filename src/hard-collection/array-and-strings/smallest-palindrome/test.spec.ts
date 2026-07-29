import { smallestPalindrome } from "./solution";

describe("3518. Smallest Palindromic Rearrangement II:", () => {
  it('smallestPalindrome should return "baab" for s = "abba", k = 2', () => {
    const s = "abba";
    const k = 2;
    const result = smallestPalindrome(s, k);
    expect(result).toEqual("baab");
  });

  it('smallestPalindrome should return "" for s = "aa", k = 2', () => {
    const s = "aa";
    const k = 2;
    const result = smallestPalindrome(s, k);
    expect(result).toEqual("");
  });

  it('smallestPalindrome should return "abcba" for s = "bacab", k = 1', () => {
    const s = "bacab";
    const k = 1;
    const result = smallestPalindrome(s, k);
    expect(result).toEqual("abcba");
  });
});
