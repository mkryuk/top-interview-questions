import { equalSubstring } from "./solution";

describe("Get Equal Substrings Within Budget", () => {
  it('equalSubstring should return 3 for s = "abcd", t = "bcdf", maxCost = 3', () => {
    const s = "abcd";
    const t = "bcdf";
    const maxCost = 3;
    const result = equalSubstring(s, t, maxCost);
    expect(result).toEqual(3);
  });

  it('equalSubstring should return 1 for s = "abcd", t = "cdef", maxCost = 3', () => {
    const s = "abcd";
    const t = "cdef";
    const maxCost = 3;
    const result = equalSubstring(s, t, maxCost);
    expect(result).toEqual(1);
  });

  it('equalSubstring should return 1 for s = "abcd", t = "acde", maxCost = 0', () => {
    const s = "abcd";
    const t = "acde";
    const maxCost = 0;
    const result = equalSubstring(s, t, maxCost);
    expect(result).toEqual(1);
  });
});
