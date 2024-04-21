import { numberOfSpecialChars } from "./solution";

describe("Count the Number of Special Characters I", () => {
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

  it('numberOfSpecialChars should return 1 for word = "abBCab"', () => {
    const word = "abBCab";
    const result = numberOfSpecialChars(word);
    expect(result).toEqual(1);
  });
});
