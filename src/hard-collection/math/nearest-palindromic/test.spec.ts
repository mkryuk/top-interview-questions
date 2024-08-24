import { nearestPalindromic } from "./solution";

describe("Find the Closest Palindrome", () => {
  it('nearestPalindromic should return n = "123"', () => {
    const n = "123";
    const result = nearestPalindromic(n);
    expect(result).toEqual("121");
  });

  it('nearestPalindromic should return n = "1"', () => {
    const n = "1";
    const result = nearestPalindromic(n);
    expect(result).toEqual("0");
  });
});
