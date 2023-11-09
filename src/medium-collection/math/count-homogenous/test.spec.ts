import { countHomogenous } from "./solution";

describe("Count Number of Homogenous Substrings:", () => {
  it('countHomogenous should return 13 for s = "abbcccaa"', () => {
    const s = "abbcccaa";
    const result = countHomogenous(s);
    expect(result).toEqual(13);
  });

  it('countHomogenous should return 2 for s = "xy"', () => {
    const s = "xy";
    const result = countHomogenous(s);
    expect(result).toEqual(2);
  });

  it('countHomogenous should return 13 for s = "zzzzz"', () => {
    const s = "zzzzz";
    const result = countHomogenous(s);
    expect(result).toEqual(15);
  });
});
