import { smallestSubsequence } from "./solution";

describe("1081. Smallest Subsequence of Distinct Characters:", () => {
  it('smallestSubsequence should return "abc" for s = "bcabc"', () => {
    const s = "bcabc";
    const result = smallestSubsequence(s);
    expect(result).toEqual("abc");
  });

  it('smallestSubsequence should return "acdb" for s = "cbacdcbc"', () => {
    const s = "cbacdcbc";
    const result = smallestSubsequence(s);
    expect(result).toEqual("acdb");
  });
});
