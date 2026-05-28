import { stringIndices } from "./solution";

describe("3093. Longest Common Suffix Queries:", () => {
  it("stringIndices should return [1,1,1] for example 1", () => {
    const wordsContainer = ["abcd", "bcd", "xbcd"];
    const wordsQuery = ["cd", "bcd", "xyz"];
    const result = stringIndices(wordsContainer, wordsQuery);
    expect(result).toEqual([1, 1, 1]);
  });

  it("stringIndices should return [2,0,2] for example 2", () => {
    const wordsContainer = ["abcdefgh", "poiuygh", "ghghgh"];
    const wordsQuery = ["gh", "acbfgh", "acbfegh"];
    const result = stringIndices(wordsContainer, wordsQuery);
    expect(result).toEqual([2, 0, 2]);
  });
});
