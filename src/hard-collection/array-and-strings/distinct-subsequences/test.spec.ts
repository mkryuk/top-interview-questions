import { numDistinct } from "./solution";

describe("115. Distinct Subsequences:", () => {
  it('numDistinct should return 3 for s = "rabbbit", t = "rabbit"', () => {
    const s = "rabbbit";
    const t = "rabbit";
    const result = numDistinct(s, t);
    expect(result).toBe(3);
  });

  it('numDistinct should return 5 for s = "babgbag", t = "bag"', () => {
    const s = "babgbag";
    const t = "bag";
    const result = numDistinct(s, t);
    expect(result).toBe(5);
  });
});
