import { countOfSubstrings } from "./solution";

describe("Count of Substrings Containing Every Vowel and K Consonants II", () => {
  it('countOfSubstrings should return 0 for word = "aeioqq", k = 1', () => {
    const word = "aeioqq";
    const k = 1;
    const result = countOfSubstrings(word, k);
    expect(result).toEqual(0);
  });

  it('countOfSubstrings should return 1 for word = "aeiou", k = 0', () => {
    const word = "aeiou";
    const k = 0;
    const result = countOfSubstrings(word, k);
    expect(result).toEqual(1);
  });

  it('countOfSubstrings should return 3 for word = "ieaouqqieaouqq", k = 1', () => {
    const word = "ieaouqqieaouqq";
    const k = 1;
    const result = countOfSubstrings(word, k);
    expect(result).toEqual(3);
  });
});
