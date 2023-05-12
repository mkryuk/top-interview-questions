import { arrayStringsAreEqual } from "./solution";

describe("Check If Two String Arrays are Equivalent", () => {
  it('arrayStringsAreEqual should return true for word1 = ["ab", "c"], word2 = ["a", "bc"]', () => {
    const word1 = ["ab", "c"];
    const word2 = ["a", "bc"];
    const result = arrayStringsAreEqual(word1, word2);
    expect(result).toBeTrue();
  });

  it('arrayStringsAreEqual should return false for word1 = ["a", "cb"], word2 = ["ab", "c"]', () => {
    const word1 = ["a", "cb"];
    const word2 = ["ab", "c"];
    const result = arrayStringsAreEqual(word1, word2);
    expect(result).toBeFalse();
  });

  it('arrayStringsAreEqual should return true for word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]', () => {
    const word1 = ["abc", "d", "defg"];
    const word2 = ["abcddefg"];
    const result = arrayStringsAreEqual(word1, word2);
    expect(result).toBeTrue();
  });
});
