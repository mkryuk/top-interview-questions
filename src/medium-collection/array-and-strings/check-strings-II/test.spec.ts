import { checkStrings } from "./solution";

describe("Check if Strings Can be Made Equal With Operations II", () => {
  it('checkStrings should return true for s1 = "abcdba", s2 = "cabdab"', () => {
    const s1 = "abcdba";
    const s2 = "cabdab";
    const result = checkStrings(s1, s2);
    expect(result).toEqual(true);
  });

  it('checkStrings should return false for s1 = "abe", s2 = "bea"', () => {
    const s1 = "abe";
    const s2 = "bea";
    const result = checkStrings(s1, s2);
    expect(result).toEqual(false);
  });
});
