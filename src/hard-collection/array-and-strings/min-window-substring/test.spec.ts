import { minWindow } from "../minimum-window-substring/solution";

describe("Minimum Window Substring:", () => {
  it('minWindow should return "BANC" for s = "ADOBECODEBANC", t = "ABC"', () => {
    const s = "ADOBECODEBANC";
    const t = "ABC";
    const result = minWindow(s, t);
    expect(result).toEqual("BANC");
  });

  it('minWindow should return "a" for s = "a", t = "a"', () => {
    const s = "a";
    const t = "a";
    const result = minWindow(s, t);
    expect(result).toEqual("a");
  });

  it('minWindow should return "" for s = "a", t = "aa"', () => {
    const s = "a";
    const t = "aa";
    const result = minWindow(s, t);
    expect(result).toEqual("");
  });
});
