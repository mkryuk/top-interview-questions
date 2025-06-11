import { maxDifference } from "./solution";

describe("3445. Maximum Difference Between Even and Odd Frequency II", () => {
  it('maxDifference should return -1 for s = "12233", k = 4', () => {
    const s = "12233";
    const k = 4;
    const result = maxDifference(s, k);
    expect(result).toEqual(-1);
  });

  it('maxDifference should return 1 for s = "1122211", k = 3', () => {
    const s = "1122211";
    const k = 3;
    const result = maxDifference(s, k);
    expect(result).toEqual(1);
  });

  it('maxDifference should return -1 for s = "110", k = 3', () => {
    const s = "110";
    const k = 3;
    const result = maxDifference(s, k);
    expect(result).toEqual(1);
  });
});
