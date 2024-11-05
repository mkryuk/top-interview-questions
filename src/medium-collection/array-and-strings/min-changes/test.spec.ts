import { minChanges } from "./solution";

describe("Minimum Number of Changes to Make Binary String Beautiful", () => {
  it('minChanges should return 2 for s = "1001"', () => {
    const s = "1001";
    const result = minChanges(s);
    expect(result).toEqual(2);
  });

  it('minChanges should return 1 for s = "10"', () => {
    const s = "10";
    const result = minChanges(s);
    expect(result).toEqual(1);
  });

  it('minChanges should return 0 for s = "0000"', () => {
    const s = "0000";
    const result = minChanges(s);
    expect(result).toEqual(0);
  });
});
