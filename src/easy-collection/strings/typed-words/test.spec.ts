import { canBeTypedWords } from "./solution";

describe("1935. Maximum Number of Words You Can Type", () => {
  it('canBeTypedWords should return 1 for text = "hello world", brokenLetters = "ad"', () => {
    const text = "hello world";
    const brokenLetters = "ad";
    const result = canBeTypedWords(text, brokenLetters);
    expect(result).toEqual(1);
  });

  it('canBeTypedWords should return 1 for text = "leet code", brokenLetters = "lt"', () => {
    const text = "leet code";
    const brokenLetters = "lt";
    const result = canBeTypedWords(text, brokenLetters);
    expect(result).toEqual(1);
  });

  it('canBeTypedWords should return 0 for text = "leet code", brokenLetters = "e"', () => {
    const text = "leet code";
    const brokenLetters = "e";
    const result = canBeTypedWords(text, brokenLetters);
    expect(result).toEqual(0);
  });
});
