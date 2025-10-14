import { removeAnagrams } from "./solution";

describe("2273. Find Resultant Array After Removing Anagrams", () => {
  it('removeAnagrams should return ["abba","cd"] for words = ["abba","baba","bbaa","cd","cd"]', () => {
    const words = ["abba", "baba", "bbaa", "cd", "cd"];
    const result = removeAnagrams(words);
    expect(result).toEqual(["abba", "cd"]);
  });

  it('removeAnagrams should return ["a","b","c","d","e"] for words = ["a","b","c","d","e"]', () => {
    const words = ["a", "b", "c", "d", "e"];
    const result = removeAnagrams(words);
    expect(result).toEqual(["a", "b", "c", "d", "e"]);
  });
});
