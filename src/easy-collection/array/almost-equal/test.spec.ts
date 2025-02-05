import { areAlmostEqual } from "./solution";

describe("Check if One String Swap Can Make Strings Equal", () => {
  it('areAlmostEqual should return true for s1 = "bank", s2 = "kanb"', () => {
    const s1 = "bank";
    const s2 = "kanb";
    const result = areAlmostEqual(s1, s2);
    expect(result).toBeTrue();
  });

  it('areAlmostEqual should return true for s1 = "attack", s2 = "defend"', () => {
    const s1 = "attack";
    const s2 = "defend";
    const result = areAlmostEqual(s1, s2);
    expect(result).toBeFalse();
  });

  it('areAlmostEqual should return true for s1 = "kelb", s2 = "kelb"', () => {
    const s1 = "kelb";
    const s2 = "kelb";
    const result = areAlmostEqual(s1, s2);
    expect(result).toBeTrue();
  });
});
