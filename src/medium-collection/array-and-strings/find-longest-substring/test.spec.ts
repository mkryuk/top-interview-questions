import { findTheLongestSubstring } from "./solution";

describe("Find the Longest Substring Containing Vowels in Even Counts", () => {
  it('findTheLongestSubstring should return 13 for s = "eleetminicoworoep"', () => {
    const s = "eleetminicoworoep";
    const result = findTheLongestSubstring(s);
    expect(result).toEqual(13);
  });

  it('findTheLongestSubstring should return 5 for s = "leetcodeisgreat"', () => {
    const s = "leetcodeisgreat";
    const result = findTheLongestSubstring(s);
    expect(result).toEqual(5);
  });

  it('findTheLongestSubstring should return 6 for s = "bcbcbc"', () => {
    const s = "bcbcbc";
    const result = findTheLongestSubstring(s);
    expect(result).toEqual(6);
  });
});
