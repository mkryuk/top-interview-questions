import { countSubstrings } from "./solution";

describe("Palindromic Substrings:", () => {
  it('countSubstrings should return 3 for s = "abc"', () => {
    const s = "abc";
    const result = countSubstrings(s);
    expect(result).toEqual(3);
  });

  it('countSubstrings should return 6 for s = "aaa"', () => {
    const s = "aaa";
    const result = countSubstrings(s);
    expect(result).toEqual(6);
  });

  it('countSubstrings should return 7 for s = "abcba"', () => {
    const s = "abcba";
    const result = countSubstrings(s);
    expect(result).toEqual(7);
  });
});
