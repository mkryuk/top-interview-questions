import { smallestPalindrome } from "./solution";

describe("3517. Smallest Palindromic Rearrangement I:", () => {
  it('smallestPalindrome should return "z" for s = "z"', () => {
    const s = "z";
    const result = smallestPalindrome(s);
    expect(result).toEqual("z");
  });

  it('smallestPalindrome should return "abbba" for s = "babab"', () => {
    const s = "babab";
    const result = smallestPalindrome(s);
    expect(result).toEqual("abbba");
  });

  it('smallestPalindrome should return "acddca" for s = "daccad"', () => {
    const s = "daccad";
    const result = smallestPalindrome(s);
    expect(result).toEqual("acddca");
  });
});
