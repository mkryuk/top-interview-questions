import { numOfStrings } from "./solution";

describe("1967. Number of Strings That Appear as Substrings in Word:", () => {
  it('numOfStrings should return 3 for patterns = ["a","abc","bc","d"], word = "abc"', () => {
    const patterns = ["a", "abc", "bc", "d"];
    const word = "abc";
    const result = numOfStrings(patterns, word);
    expect(result).toEqual(3);
  });

  it('numOfStrings should return 2 for patterns = ["a","b","c"], word = "aaaaabbbbb"', () => {
    const patterns = ["a", "b", "c"];
    const word = "aaaaabbbbb";
    const result = numOfStrings(patterns, word);
    expect(result).toEqual(2);
  });

  it('numOfStrings should return 3 for patterns = ["a","a","a"], word = "ab"', () => {
    const patterns = ["a", "a", "a"];
    const word = "ab";
    const result = numOfStrings(patterns, word);
    expect(result).toEqual(3);
  });
});
