import { numberOfSpecialChars } from "./solution";

describe("3121. Count the Number of Special Characters II:", () => {
  it('numberOfSpecialChars should return 3 for word = "aaAbcBC"', () => {
    const word = "aaAbcBC";
    const result = numberOfSpecialChars(word);
    expect(result).toEqual(3);
  });

  it('numberOfSpecialChars should return 0 for word = "abc"', () => {
    const word = "abc";
    const result = numberOfSpecialChars(word);
    expect(result).toEqual(0);
  });

  it('numberOfSpecialChars should return 0 for word = "AbBCab"', () => {
    const word = "AbBCab";
    const result = numberOfSpecialChars(word);
    expect(result).toEqual(0);
  });
});
