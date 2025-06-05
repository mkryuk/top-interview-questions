import { smallestEquivalentString } from "./solution";

describe("1061. Lexicographically Smallest Equivalent String", () => {
  it('smallestEquivalentString should return "makkek" for s1 = "parker", s2 = "morris", baseStr = "parser"', () => {
    const s1 = "parker";
    const s2 = "morris";
    const baseStr = "parser";
    const result = smallestEquivalentString(s1, s2, baseStr);
    expect(result).toEqual("makkek");
  });

  it('smallestEquivalentString should return "hdld" for s1 = "hello", s2 = "world", baseStr = "hold"', () => {
    const s1 = "hello";
    const s2 = "world";
    const baseStr = "hold";
    const result = smallestEquivalentString(s1, s2, baseStr);
    expect(result).toEqual("hdld");
  });

  it('smallestEquivalentString should return "aauaaaaada" for s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"', () => {
    const s1 = "leetcode";
    const s2 = "programs";
    const baseStr = "sourcecode";
    const result = smallestEquivalentString(s1, s2, baseStr);
    expect(result).toEqual("aauaaaaada");
  });
});
