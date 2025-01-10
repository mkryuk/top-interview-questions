import { wordSubsets } from "./solution";

describe("Word Subsets", () => {
  it('wordSubsets should return ["facebook","google","leetcode"] for words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]', () => {
    const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    const words2 = ["e", "o"];
    const result = wordSubsets(words1, words2);
    expect(result).toEqual(["facebook", "google", "leetcode"]);
  });

  it('wordSubsets should return ["apple","google","leetcode"] for words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]', () => {
    const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    const words2 = ["l", "e"];
    const result = wordSubsets(words1, words2);
    expect(result).toEqual(["apple", "google", "leetcode"]);
  });
});
