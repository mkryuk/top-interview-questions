import { getWordsInLongestSubsequence } from "./solution";

describe("Longest Unequal Adjacent Groups Subsequence II", () => {
  it('getWordsInLongestSubsequence should return ["bab","dab"] for words = ["bab","dab","cab"], groups = [1,2,2]', () => {
    const words = ["bab", "dab", "cab"];
    const groups = [1, 2, 2];
    const result = getWordsInLongestSubsequence(words, groups);
    expect(result).toEqual(["bab", "dab"]);
  });

  it('getWordsInLongestSubsequence should return ["a","b","c","d"] for words = ["a","b","c","d"], groups = [1,2,3,4]', () => {
    const words = ["a", "b", "c", "d"];
    const groups = [1, 2, 3, 4];
    const result = getWordsInLongestSubsequence(words, groups);
    expect(result).toEqual(["a", "b", "c", "d"]);
  });
});
