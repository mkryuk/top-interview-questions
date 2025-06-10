import { maxDifference } from "./solution";

describe("3442. Maximum Difference Between Even and Odd Frequency I", () => {
  it('maxDifference should return 3 for  s = "aaaaabbc"', () => {
    const s = "aaaaabbc";
    const result = maxDifference(s);
    expect(result).toEqual(3);
  });

  it('maxDifference should return 1 for  s = "abcabcab"', () => {
    const s = "abcabcab";
    const result = maxDifference(s);
    expect(result).toEqual(1);
  });
});
