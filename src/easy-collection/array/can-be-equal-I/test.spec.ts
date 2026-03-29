import { canBeEqual } from "./solution";

describe("Check if Strings Can be Made Equal With Operations I", () => {
  it('canBeEqual should return true for s1 = "abcd", s2 = "cdab"', () => {
    const s1 = "abcd";
    const s2 = "cdab";
    const result = canBeEqual(s1, s2);
    expect(result).toBeTrue();
  });

  it('canBeEqual should return false for s1 = "abcd", s2 = "dacb"', () => {
    const s1 = "abcd";
    const s2 = "dacb";
    const result = canBeEqual(s1, s2);
    expect(result).toBeFalse();
  });
});
