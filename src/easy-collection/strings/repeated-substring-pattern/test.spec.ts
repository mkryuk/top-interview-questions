import { repeatedSubstringPattern } from "./solution";

describe("Repeated Substring Pattern:", () => {
  it('repeatedSubstringPattern should return true for s = "abab"', () => {
    const s = "abab";
    const result = repeatedSubstringPattern(s);
    expect(result).toBeTrue();
  });

  it('repeatedSubstringPattern should return false for s = "aba"', () => {
    const s = "aba";
    const result = repeatedSubstringPattern(s);
    expect(result).toBeFalse();
  });

  it('repeatedSubstringPattern should return true for s = "abcabcabcabc"', () => {
    const s = "abcabcabcabc";
    const result = repeatedSubstringPattern(s);
    expect(result).toBeTrue();
  });

  it('repeatedSubstringPattern should return true for s = "abcabcabc"', () => {
    const s = "abcabcabc";
    const result = repeatedSubstringPattern(s);
    expect(result).toBeTrue();
  });
});
