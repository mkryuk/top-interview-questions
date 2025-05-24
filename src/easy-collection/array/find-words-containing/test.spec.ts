import { findWordsContaining } from "./solution";

describe("Find Words Containing Character", () => {
  it('findWordsContaining should return [0,1] for words = ["leet","code"], x = "e"', () => {
    const words = ["leet", "code"];
    const x = "e";
    const result = findWordsContaining(words, x);
    expect(result).toEqual([0, 1]);
  });

  it('findWordsContaining should return [0,2] for words = ["abc","bcd","aaaa","cbc"], x = "a"', () => {
    const words = ["abc", "bcd", "aaaa", "cbc"];
    const x = "a";
    const result = findWordsContaining(words, x);
    expect(result).toEqual([0, 2]);
  });

  it('findWordsContaining should return [] for words = ["abc","bcd","aaaa","cbc"], x = "z"', () => {
    const words = ["abc", "bcd", "aaaa", "cbc"];
    const x = "z";
    const result = findWordsContaining(words, x);
    expect(result).toEqual([]);
  });
});
