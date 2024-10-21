import { maxUniqueSplit } from "./solution";

describe("Split a String Into the Max Number of Unique Substrings", () => {
  it('maxUniqueSplit should return 5 for s = "ababccc"', () => {
    const s = "ababccc";
    const result = maxUniqueSplit(s);
    expect(result).toEqual(5);
  });

  it('maxUniqueSplit should return 2 for s = "aba"', () => {
    const s = "aba";
    const result = maxUniqueSplit(s);
    expect(result).toEqual(2);
  });

  it('maxUniqueSplit should return 1 for s = "aa"', () => {
    const s = "aa";
    const result = maxUniqueSplit(s);
    expect(result).toEqual(1);
  });

  it('maxUniqueSplit should return 11 for s = "wwwzfvedwfvhsww"', () => {
    const s = "wwwzfvedwfvhsww";
    const result = maxUniqueSplit(s);
    expect(result).toEqual(11);
  });
});
