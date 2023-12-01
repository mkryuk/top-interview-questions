import { appendCharacters } from "./solution";

describe("Append Characters to String to Make Subsequence:", () => {
  it('appendCharacters should return 4 for s = "coaching", t = "coding"', () => {
    const s = "coaching";
    const t = "coding";
    const result = appendCharacters(s, t);
    expect(result).toEqual(4);
  });

  it('appendCharacters should return 4 for s = "abcde", t = "a"', () => {
    const s = "abcde";
    const t = "a";
    const result = appendCharacters(s, t);
    expect(result).toEqual(0);
  });

  it('appendCharacters should return 5 for s = "z", t = "abcde"', () => {
    const s = "z";
    const t = "abcde";
    const result = appendCharacters(s, t);
    expect(result).toEqual(5);
  });
});
