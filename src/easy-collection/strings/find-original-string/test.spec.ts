import { possibleStringCount } from "./solution";

describe("3330. Find the Original Typed String I", () => {
  it('possibleStringCount should return 5 for word = "abbcccc"', () => {
    const word = "abbcccc";
    const result = possibleStringCount(word);
    expect(result).toEqual(5);
  });

  it('possibleStringCount should return 1 for word = "abcd"', () => {
    const word = "abcd";
    const result = possibleStringCount(word);
    expect(result).toEqual(1);
  });

  it('possibleStringCount should return 4 for word = "aaaa"', () => {
    const word = "aaaa";
    const result = possibleStringCount(word);
    expect(result).toEqual(4);
  });
});
