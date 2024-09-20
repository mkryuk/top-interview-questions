import { shortestPalindrome } from "./solution";

describe("Shortest Palindrome", () => {
  it('shortestPalindrome should return "aaacecaaa" for s = "aacecaaa"', () => {
    const s = "aacecaaa";
    const result = shortestPalindrome(s);
    expect(result).toEqual("aaacecaaa");
  });

  it('shortestPalindrome should return "dcbabcd" for s = "abcd"', () => {
    const s = "abcd";
    const result = shortestPalindrome(s);
    expect(result).toEqual("dcbabcd");
  });
});
