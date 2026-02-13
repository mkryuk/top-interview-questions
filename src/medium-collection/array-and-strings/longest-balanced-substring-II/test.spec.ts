import { longestBalanced } from "./solution";

describe("Longest Balanced Substring II", () => {
  it('longestBalanced should return 4 for s = "abbac"', () => {
    const s = "abbac";
    const result = longestBalanced(s);
    expect(result).toEqual(4);
  });

  it('longestBalanced should return 3 for s = "aabcc"', () => {
    const s = "aabcc";
    const result = longestBalanced(s);
    expect(result).toEqual(3);
  });

  it('longestBalanced should return 2 for s = "aba"', () => {
    const s = "aba";
    const result = longestBalanced(s);
    expect(result).toEqual(2);
  });
});
