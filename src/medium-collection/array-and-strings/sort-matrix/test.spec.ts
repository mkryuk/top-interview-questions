import { sortMatrix } from "./solution";

describe("3446. Sort Matrix by Diagonals", () => {
  it("sortMatrix should return [[8,2,3],[9,6,7],[4,5,1]] for grid = [[1,7,3],[9,8,2],[4,5,6]]", () => {
    const grid = [
      [1, 7, 3],
      [9, 8, 2],
      [4, 5, 6],
    ];
    const result = sortMatrix(grid);
    expect(result).toEqual([
      [8, 2, 3],
      [9, 6, 7],
      [4, 5, 1],
    ]);
  });

  it("sortMatrix should return [[2,1],[1,0]] for grid = [[0,1],[1,2]]", () => {
    const grid = [
      [0, 1],
      [1, 2],
    ];
    const result = sortMatrix(grid);
    expect(result).toEqual([
      [2, 1],
      [1, 0],
    ]);
  });
});
