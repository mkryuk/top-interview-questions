import { maximumLengthSubstring } from "./solution";

describe("3090. Maximum Length Substring With Two Occurrences:", () => {
  it('maximumLengthSubstring should return 4 for s = "bcbbbcba"', () => {
    const s = "bcbbbcba";
    const result = maximumLengthSubstring(s);
    expect(result).toEqual(4);
  });

  it('maximumLengthSubstring should return 2 for s = "aaaa"', () => {
    const s = "aaaa";
    const result = maximumLengthSubstring(s);
    expect(result).toEqual(2);
  });
});
