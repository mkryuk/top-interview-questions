import { getLongestSubsequence } from "./solution";

describe("Longest Unequal Adjacent Groups Subsequence I", () => {
  it('getLongestSubsequence should return ["e","b"] for words = ["e","a","b"], groups = [0,0,1]', () => {
    const words = ["e", "a", "b"];
    const groups = [0, 0, 1];
    const result = getLongestSubsequence(words, groups);
    expect(result).toEqual(["e", "b"]);
  });

  it('getLongestSubsequence should return ["a","b","c"] for words = ["a","b","c","d"], groups = [1,0,1,1]', () => {
    const words = ["a", "b", "c", "d"];
    const groups = [1, 0, 1, 1];
    const result = getLongestSubsequence(words, groups);
    expect(result).toEqual(["a", "b", "c"]);
  });
});
