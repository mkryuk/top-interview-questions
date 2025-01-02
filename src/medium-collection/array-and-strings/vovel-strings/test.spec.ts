import { vowelStrings } from "./solution";

describe("Count Vowel Strings in Ranges", () => {
  it('vowelStrings should return [2,3,0] for words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]', () => {
    const words = ["aba", "bcb", "ece", "aa", "e"];
    const queries = [
      [0, 2],
      [1, 4],
      [1, 1],
    ];
    const result = vowelStrings(words, queries);
    expect(result).toEqual([2, 3, 0]);
  });

  it('vowelStrings should return [3,2,1] for words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]', () => {
    const words = ["a", "e", "i"];
    const queries = [
      [0, 2],
      [0, 1],
      [2, 2],
    ];
    const result = vowelStrings(words, queries);
    expect(result).toEqual([3, 2, 1]);
  });
});
