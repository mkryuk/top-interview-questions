import { countKConstraintSubstrings } from "./solution";

describe("Count Substrings That Satisfy K-Constraint I", () => {
  it('countKConstraintSubstrings should return 12 for s = "10101", k = 1', () => {
    const s = "10101";
    const k = 1;
    const result = countKConstraintSubstrings(s, k);
    expect(result).toEqual(12);
  });

  it('countKConstraintSubstrings should return 25 for s = "1010101", k = 2', () => {
    const s = "1010101";
    const k = 2;
    const result = countKConstraintSubstrings(s, k);
    expect(result).toEqual(25);
  });

  it('countKConstraintSubstrings should return 15 for s = "11111", k = 1', () => {
    const s = "11111";
    const k = 1;
    const result = countKConstraintSubstrings(s, k);
    expect(result).toEqual(15);
  });
});
