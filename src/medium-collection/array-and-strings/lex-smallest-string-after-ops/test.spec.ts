import { findLexSmallestString } from "./solution";

describe("1625. Lexicographically Smallest String After Applying Operations", () => {
  it('findLexSmallestString should return "2050" for s = "5525", a = 9, b = 2', () => {
    const s = "5525";
    const a = 9;
    const b = 2;
    const result = findLexSmallestString(s, a, b);
    expect(result).toEqual("2050");
  });

  it('findLexSmallestString should return "24" for s = "74", a = 5, b = 1', () => {
    const s = "74";
    const a = 5;
    const b = 1;
    const result = findLexSmallestString(s, a, b);
    expect(result).toEqual("24");
  });

  it('findLexSmallestString should return "0011" for s = "0011", a = 4, b = 2', () => {
    const s = "0011";
    const a = 4;
    const b = 2;
    const result = findLexSmallestString(s, a, b);
    expect(result).toEqual("0011");
  });
});
