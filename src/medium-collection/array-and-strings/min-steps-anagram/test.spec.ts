import { minSteps } from "./solution";

describe("Minimum Number of Steps to Make Two Strings Anagram:", () => {
  it('minSteps should return 1 for s = "bab", t = "aba"', () => {
    const s = "bab";
    const t = "aba";
    const result = minSteps(s, t);
    expect(result).toEqual(1);
  });

  it('minSteps should return 5 for s = "leetcode", t = "practice"', () => {
    const s = "leetcode";
    const t = "practice";
    const result = minSteps(s, t);
    expect(result).toEqual(5);
  });

  it('minSteps should return 0 for s = "leetcode", t = "practice"', () => {
    const s = "anagram";
    const t = "mangaar";
    const result = minSteps(s, t);
    expect(result).toEqual(0);
  });
});
