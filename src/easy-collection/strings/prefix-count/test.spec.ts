import { prefixCount } from "./solution";

describe("Counting Words With a Given Prefix", () => {
  it('prefixCount should return 2 for words = ["pay","attention","practice","attend"], pref = "at"', () => {
    const words = ["pay", "attention", "practice", "attend"];
    const pref = "at";
    const result = prefixCount(words, pref);
    expect(result).toEqual(2);
  });

  it('prefixCount should return 0 for words = ["leetcode","win","loops","success"], pref = "code"', () => {
    const words = ["leetcode", "win", "loops", "success"];
    const pref = "code";
    const result = prefixCount(words, pref);
    expect(result).toEqual(0);
  });
});
