import { countPrefixSuffixPairs } from "./solution";

describe("Count Prefix and Suffix Pairs I", () => {
  it('countPrefixSuffixPairs should return 4 for words = ["a","aba","ababa","aa"]', () => {
    const words = ["a", "aba", "ababa", "aa"];
    const result = countPrefixSuffixPairs(words);
    expect(result).toEqual(4);
  });

  it('countPrefixSuffixPairs should return 2 for words = ["pa","papa","ma","mama"]', () => {
    const words = ["pa", "papa", "ma", "mama"];
    const result = countPrefixSuffixPairs(words);
    expect(result).toEqual(2);
  });

  it('countPrefixSuffixPairs should return 0 for words = ["abab","ab"]', () => {
    const words = ["abab", "ab"];
    const result = countPrefixSuffixPairs(words);
    expect(result).toEqual(0);
  });
});
