import { maxVowels } from "./solution";

describe("Maximum Number of Vowels in a Substring of Given Length", () => {
  it('maxVowels should return 3 for s = "abciiidef", k = 3', () => {
    const s = "abciiidef";
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toEqual(3);
  });

  it('maxVowels should return 2 for s = "aeiou", k = 2', () => {
    const s = "aeiou";
    const k = 2;
    const result = maxVowels(s, k);
    expect(result).toEqual(2);
  });

  it('maxVowels should return 2 for s = "leetcode", k = 3', () => {
    const s = "leetcode";
    const k = 2;
    const result = maxVowels(s, k);
    expect(result).toEqual(2);
  });
});
