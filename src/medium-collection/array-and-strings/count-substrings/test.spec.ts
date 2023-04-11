import { countSubstrings } from "./solution";

describe("Count Substrings That Differ by One Character", () => {
  it('countSubstrings should return 6 for s = "aba", t = "baba"', () => {
    const s = "aba";
    const t = "baba";
    const result = countSubstrings(s, t);
    expect(result).toEqual(6);
  });

  it('countSubstrings should return 3 for s = "ab", t = "bb"', () => {
    const s = "ab";
    const t = "bb";
    const result = countSubstrings(s, t);
    expect(result).toEqual(3);
  });
});
