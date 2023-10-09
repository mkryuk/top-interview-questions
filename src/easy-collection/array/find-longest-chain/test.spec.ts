import { findLongestChain } from "./solution";

describe("Maximum Length of Pair Chain:", () => {
  it("findLongestChain should return 2 for pairs = [[1,2],[2,3],[3,4]]", () => {
    const pairs = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(2);
  });

  it("findLongestChain should return 3 for pairs = [[1,2],[7,8],[4,5]]", () => {
    const pairs = [
      [1, 2],
      [7, 8],
      [4, 5],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(3);
  });
});
