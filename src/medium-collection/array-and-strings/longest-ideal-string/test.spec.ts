import { longestIdealString } from "./solution";

describe("Longest Ideal Subsequence", () => {
  it('longestIdealString should return 4 for s = "acfgbd", k = 2', () => {
    const s = "acfgbd";
    const k = 2;
    const result = longestIdealString(s, k);
    expect(result).toEqual(4);
  });

  it('longestIdealString should return 4 for s = "abcd", k = 3', () => {
    const s = "abcd";
    const k = 3;
    const result = longestIdealString(s, k);
    expect(result).toEqual(4);
  });

  it('longestIdealString should return 6 for s = "znrkjnk", k = 8', () => {
    const s = "znrkjnk";
    const k = 8;
    const result = longestIdealString(s, k);
    expect(result).toEqual(6);
  });

  it('longestIdealString should return 5 for s = "azaza", k = 25', () => {
    const s = "azaza";
    const k = 25;
    const result = longestIdealString(s, k);
    expect(result).toEqual(5);
  });
});
