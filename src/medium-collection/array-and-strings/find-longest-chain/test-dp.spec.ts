import { findLongestChain } from "./solution-dp";

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

  it("findLongestChain should return 3 for pairs = [[1,3],[1,2],[2,5],[9,10],[2,3],[5,6],[4,5]]", () => {
    const pairs = [
      [1, 3],
      [1, 2],
      [2, 5],
      [9, 10],
      [2, 3],
      [5, 6],
      [4, 5],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(3);
  });

  it("findLongestChain should return 4 for pairs = [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]", () => {
    const pairs = [
      [-10, -8],
      [8, 9],
      [-5, 0],
      [6, 10],
      [-6, -4],
      [1, 7],
      [9, 10],
      [-4, 7],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(4);
  });

  it("findLongestChain should return 3 for pairs = [[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]", () => {
    const pairs = [
      [-6, 9],
      [1, 6],
      [8, 10],
      [-1, 4],
      [-6, -2],
      [-9, 8],
      [-5, 3],
      [0, 3],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(3);
  });

  it("findLongestChain should return 4 for pairs = [[7,9],[4,5],[7,9],[-7,-1],[0,10],[3,10],[3,6],[2,3]]", () => {
    const pairs = [
      [7, 9],
      [4, 5],
      [7, 9],
      [-7, -1],
      [0, 10],
      [3, 10],
      [3, 6],
      [2, 3],
    ];
    const result = findLongestChain(pairs);
    expect(result).toEqual(4);
  });
});
