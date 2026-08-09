import { validSequence } from "./solution";

describe("3302. Find the Lexicographically Smallest Valid Sequence:", () => {
  it('validSequence should return [0,1,2] for word1 = "vbcca", word2 = "abc"', () => {
    const word1 = "vbcca";
    const word2 = "abc";
    const result = validSequence(word1, word2);
    expect(result).toEqual([0, 1, 2]);
  });

  it('validSequence should return [1,2,4] for word1 = "bacdc", word2 = "abc"', () => {
    const word1 = "bacdc";
    const word2 = "abc";
    const result = validSequence(word1, word2);
    expect(result).toEqual([1, 2, 4]);
  });

  it('validSequence should return [] for word1 = "aaaaaa", word2 = "aaabc"', () => {
    const word1 = "aaaaaa";
    const word2 = "aaabc";
    const result = validSequence(word1, word2);
    expect(result).toEqual([]);
  });

  it('validSequence should return [0,1] for word1 = "abc", word2 = "ab"', () => {
    const word1 = "abc";
    const word2 = "ab";
    const result = validSequence(word1, word2);
    expect(result).toEqual([0, 1]);
  });
});
