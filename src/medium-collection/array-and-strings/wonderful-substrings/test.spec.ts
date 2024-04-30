import { wonderfulSubstrings } from "./solution";

describe("Number of Wonderful Substrings", () => {
  it('wonderfulSubstrings should return 4 for word = "aba"', () => {
    const word = "aba";
    const result = wonderfulSubstrings(word);
    expect(result).toEqual(4);
  });

  it('wonderfulSubstrings should return 9 for word = "aabb"', () => {
    const word = "aabb";
    const result = wonderfulSubstrings(word);
    expect(result).toEqual(9);
  });

  it('wonderfulSubstrings should return 2 for word = "he"', () => {
    const word = "he";
    const result = wonderfulSubstrings(word);
    expect(result).toEqual(2);
  });
});
