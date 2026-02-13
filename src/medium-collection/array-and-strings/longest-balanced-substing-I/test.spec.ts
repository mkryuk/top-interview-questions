import { longestBalanced } from "./solution";

describe("Longest Balanced Substring I", () => {
  it('longestBalanced should return 4 for s = "abbac"', () => {
    const s = "abbac";
    const result = longestBalanced(s);
    expect(result).toEqual(4);
  });

  it('longestBalanced should return 4 for s = "zzabccy"', () => {
    const s = "zzabccy";
    const result = longestBalanced(s);
    expect(result).toEqual(4);
  });

  it('longestBalanced should return 2 for s = "aba"', () => {
    const s = "aba";
    const result = longestBalanced(s);
    expect(result).toEqual(2);
  });
});
