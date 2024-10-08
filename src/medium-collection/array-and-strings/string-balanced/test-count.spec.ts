import { minSwaps } from "./solution-count";

describe("Minimum Number of Swaps to Make the String Balanced", () => {
  it('minSwaps should return 1 for s = "][]["', () => {
    const s = "][][";
    const result = minSwaps(s);
    expect(result).toEqual(1);
  });

  it('minSwaps should return 2 for s = "]]][[["', () => {
    const s = "]]][[[";
    const result = minSwaps(s);
    expect(result).toEqual(2);
  });

  it('minSwaps should return 1 for s = "[]"', () => {
    const s = "[]";
    const result = minSwaps(s);
    expect(result).toEqual(0);
  });

  it('minSwaps should return 1 for "][][]["', () => {
    const s = "][][][";
    const result = minSwaps(s);
    expect(result).toEqual(1);
  });
});
