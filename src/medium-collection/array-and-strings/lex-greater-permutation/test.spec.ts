import { lexGreaterPermutation } from "./solution";

describe("3720. Lexicographically Smallest Permutation Greater Than Target:", () => {
  it('lexGreaterPermutation should return "bca" for s = "abc" and target = "bba"', () => {
    const s = "abc";
    const target = "bba";
    const result = lexGreaterPermutation(s, target);
    expect(result).toEqual("bca");
  });

  it('lexGreaterPermutation should return "eelt" for s = "leet" and target = "code"', () => {
    const s = "leet";
    const target = "code";
    const result = lexGreaterPermutation(s, target);
    expect(result).toEqual("eelt");
  });

  it('lexGreaterPermutation should return "" for s = "baba" and target = "bbaa"', () => {
    const s = "baba";
    const target = "bbaa";
    const result = lexGreaterPermutation(s, target);
    expect(result).toEqual("");
  });
});
