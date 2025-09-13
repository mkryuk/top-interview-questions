import { maxFreqSum } from "./solution";

describe("3541. Find Most Frequent Vowel and Consonant", () => {
  it('maxFreqSum should return 6 for s = "successes"', () => {
    const s = "successes";
    const result = maxFreqSum(s);
    expect(result).toEqual(6);
  });

  it('maxFreqSum should return 3 for s = "aeiaeia"', () => {
    const s = "aeiaeia";
    const result = maxFreqSum(s);
    expect(result).toEqual(3);
  });
});
