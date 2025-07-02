import { possibleStringCount } from "./solution";

describe("3333. Find the Original Typed String II", () => {
  it('possibleStringCount should return 5 for word = "aabbccdd", k = 7', () => {
    const word = "aabbccdd";
    const k = 7;
    const result = possibleStringCount(word, k);
    expect(result).toEqual(5);
  });

  it('possibleStringCount should return 1 for word = "aabbccdd", k = 8', () => {
    const word = "aabbccdd";
    const k = 8;
    const result = possibleStringCount(word, k);
    expect(result).toEqual(1);
  });

  it('possibleStringCount should return 8 for word = "aaabbb", k = 3', () => {
    const word = "aaabbb";
    const k = 3;
    const result = possibleStringCount(word, k);
    expect(result).toEqual(8);
  });
});
