import { isIsomorphic } from "./solution";

describe("Isomorphic Strings", () => {
  it('isIsomorphic should return true for s = "egg", t = "add"', () => {
    const s = "egg";
    const t = "add";
    const result = isIsomorphic(s, t);
    expect(result).toBeTrue();
  });

  it('isIsomorphic should return false for s = "foo", t = "bar"', () => {
    const s = "foo";
    const t = "bar";
    const result = isIsomorphic(s, t);
    expect(result).toBeFalse();
  });

  it('isIsomorphic should return true for s = "paper", t = "title"', () => {
    const s = "paper";
    const t = "title";
    const result = isIsomorphic(s, t);
    expect(result).toBeTrue();
  });

  it('isIsomorphic should return false for s = "bbbaaaba", t = "aaabbbba"', () => {
    const s = "bbbaaaba";
    const t = "aaabbbba";
    const result = isIsomorphic(s, t);
    expect(result).toBeFalse();
  });

  it('isIsomorphic should return false for s = "badc", t = "baba"', () => {
    const s = "badc";
    const t = "baba";
    const result = isIsomorphic(s, t);
    expect(result).toBeFalse();
  });
});
