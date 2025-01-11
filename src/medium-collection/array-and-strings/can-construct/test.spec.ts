import { canConstruct } from "./solution";

describe("Construct K Palindrome Strings", () => {
  it('canConstruct should return true for s = "annabelle", k = 2', () => {
    const s = "annabelle";
    const k = 2;
    const result = canConstruct(s, k);
    expect(result).toBeTrue();
  });

  it('canConstruct should return false for s = "leetcode", k = 3', () => {
    const s = "leetcode";
    const k = 3;
    const result = canConstruct(s, k);
    expect(result).toBeFalse();
  });

  it('canConstruct should return true for s = "true", k = 4', () => {
    const s = "true";
    const k = 4;
    const result = canConstruct(s, k);
    expect(result).toBeTrue();
  });
});
