import { isSubsequence } from "./solution";

describe("Is Subsequence", () => {
  it('isSubsequence should return true for s = "abc", t = "ahbgdc"', () => {
    const s = "abc";
    const t = "ahbgdc";
    const result = isSubsequence(s, t);
    expect(result).toBeTrue();
  });

  it('isSubsequence should return false for s = "axc", t = "ahbgdc"', () => {
    const s = "axc";
    const t = "ahbgdc";
    const result = isSubsequence(s, t);
    expect(result).toBeFalse();
  });
});
