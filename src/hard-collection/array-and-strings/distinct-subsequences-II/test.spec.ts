import { distinctSubseqII } from "./solution";

describe("940. Distinct Subsequences II:", () => {
  it('distinctSubseqII should return 7 for s = "abc"', () => {
    const s = "abc";
    const result = distinctSubseqII(s);
    expect(result).toBe(7);
  });

  it('distinctSubseqII should return 6 for s = "aba"', () => {
    const s = "aba";
    const result = distinctSubseqII(s);
    expect(result).toBe(6);
  });

  it('distinctSubseqII should return 3 for s = "aaa"', () => {
    const s = "aaa";
    const result = distinctSubseqII(s);
    expect(result).toBe(3);
  });
});
