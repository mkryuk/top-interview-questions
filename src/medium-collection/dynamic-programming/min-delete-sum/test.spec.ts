import { minimumDeleteSum } from "./solution";

describe("712. Minimum ASCII Delete Sum for Two Strings:", () => {
  it('minimumDeleteSum should return 231 for s1 = "sea", s2 = "eat"', () => {
    const s1 = "sea";
    const s2 = "eat";
    const result = minimumDeleteSum(s1, s2);
    expect(result).toEqual(231);
  });

  it('minimumDeleteSum should return 403 for s1 = "delete", s2 = "leet"', () => {
    const s1 = "delete";
    const s2 = "leet";
    const result = minimumDeleteSum(s1, s2);
    expect(result).toEqual(403);
  });
});
