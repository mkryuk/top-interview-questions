import { getLucky } from "./solution";

describe("Sum of Digits of String After Convert", () => {
  it('getLucky should return 36 for s = "iiii", k = 1', () => {
    const s = "iiii";
    const k = 1;
    const result = getLucky(s, k);
    expect(result).toEqual(36);
  });

  it('getLucky should return 26 for s = "leetcode", k = 2', () => {
    const s = "leetcode";
    const k = 2;
    const result = getLucky(s, k);
    expect(result).toEqual(26);
  });

  it('getLucky should return 8 for s = "zbax", k = 2', () => {
    const s = "zbax";
    const k = 2;
    const result = getLucky(s, k);
    expect(result).toEqual(8);
  });
});
