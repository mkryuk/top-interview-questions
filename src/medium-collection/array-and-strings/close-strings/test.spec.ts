import { closeStrings } from "./solution";

describe("Determine if Two Strings Are Close:", () => {
  it('closeStrings should return true for word1 = "abc", word2 = "bca"', () => {
    const word1 = "abc";
    const word2 = "bca";
    const result = closeStrings(word1, word2);
    expect(result).toBeTrue();
  });

  it('closeStrings should return false for word1 = "a", word2 = "aa"', () => {
    const word1 = "a";
    const word2 = "aa";
    const result = closeStrings(word1, word2);
    expect(result).toBeFalse();
  });

  it('closeStrings should return trud for word1 = "cabbba", word2 = "abbccc"', () => {
    const word1 = "cabbba";
    const word2 = "abbccc";
    const result = closeStrings(word1, word2);
    expect(result).toBeTrue();
  });
});
