import { maximumLength } from "./solution";

describe("Find Longest Special Substring That Occurs Thrice I", () => {
  it('maximumLength should return 2 for s = "aaaa"', () => {
    const s = "aaaa";
    const result = maximumLength(s);
    expect(result).toEqual(2);
  });

  it('maximumLength should return -1 for s = "abcdef"', () => {
    const s = "abcdef";
    const result = maximumLength(s);
    expect(result).toEqual(-1);
  });

  it('maximumLength should return 1 for s = "abcaba"', () => {
    const s = "abcaba";
    const result = maximumLength(s);
    expect(result).toEqual(1);
  });
});
