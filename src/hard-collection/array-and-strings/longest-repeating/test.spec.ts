import { longestRepeating } from "./solution";

describe("2213. Longest Substring of One Repeating Character:", () => {
  it('longestRepeating should return [3,3,4] for s = "babacc", queryCharacters = "bcb", queryIndices = [1,3,3]', () => {
    const s = "babacc";
    const queryCharacters = "bcb";
    const queryIndices = [1, 3, 3];
    const result = longestRepeating(s, queryCharacters, queryIndices);
    expect(result).toEqual([3, 3, 4]);
  });

  it('longestRepeating should return [2,3] for s = "abyzz", queryCharacters = "aa", queryIndices = [2,1]', () => {
    const s = "abyzz";
    const queryCharacters = "aa";
    const queryIndices = [2, 1];
    const result = longestRepeating(s, queryCharacters, queryIndices);
    expect(result).toEqual([2, 3]);
  });
});
