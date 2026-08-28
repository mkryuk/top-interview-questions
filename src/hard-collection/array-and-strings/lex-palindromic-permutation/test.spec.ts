import { lexPalindromicPermutation } from "./solution";

describe("3734. Lexicographically Smallest Palindromic Permutation Greater Than Target:", () => {
  it('lexPalindromicPermutation should return "baab" for s = "baba", target = "abba"', () => {
    const s = "baba";
    const target = "abba";
    const result = lexPalindromicPermutation(s, target);
    expect(result).toEqual("baab");
  });

  it('lexPalindromicPermutation should return "" for s = "baba", target = "bbaa"', () => {
    const s = "baba";
    const target = "bbaa";
    const result = lexPalindromicPermutation(s, target);
    expect(result).toEqual("");
  });

  it('lexPalindromicPermutation should return "" for s = "abc", target = "abb"', () => {
    const s = "abc";
    const target = "abb";
    const result = lexPalindromicPermutation(s, target);
    expect(result).toEqual("");
  });

  it('lexPalindromicPermutation should return "aca" for s = "aac", target = "abb"', () => {
    const s = "aac";
    const target = "abb";
    const result = lexPalindromicPermutation(s, target);
    expect(result).toEqual("aca");
  });
});
