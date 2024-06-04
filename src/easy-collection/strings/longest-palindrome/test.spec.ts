import { longestPalindrome } from "./solution";

describe("Longest Palindrome", () => {
  it('longestPalindrome should return 7 for s = "abccccdd"', () => {
    const s = "abccccdd";
    const result = longestPalindrome(s);
    expect(result).toEqual(7);
  });

  it('longestPalindrome should return 1 for s = "a"', () => {
    const s = "a";
    const result = longestPalindrome(s);
    expect(result).toEqual(1);
  });

  it('longestPalindrome should return 9 for "aaabbbcccdd"', () => {
    const s = "aaabbbcccdd";
    const result = longestPalindrome(s);
    expect(result).toEqual(9);
  });
});
