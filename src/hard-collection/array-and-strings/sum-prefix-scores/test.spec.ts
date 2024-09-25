import { sumPrefixScores } from "./solution";

describe("Sum of Prefix Scores of Strings", () => {
  it('sumPrefixScores should return [5,4,3,2] for words = ["abc","ab","bc","b"]', () => {
    const words = ["abc", "ab", "bc", "b"];
    const result = sumPrefixScores(words);
    expect(result).toEqual([5, 4, 3, 2]);
  });

  it('sumPrefixScores should return [4] for words = ["abcd"]', () => {
    const words = ["abcd"];
    const result = sumPrefixScores(words);
    expect(result).toEqual([4]);
  });
});
