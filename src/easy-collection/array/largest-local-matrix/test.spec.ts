import { largestLocal } from "./solution";

describe("Largest Local Values in a Matrix", () => {
  it("largestLocal should return [[9,9],[8,6]] for grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]", () => {
    const grid = [
      [9, 9, 8, 1],
      [5, 6, 2, 6],
      [8, 2, 6, 4],
      [6, 2, 2, 2],
    ];
    const result = largestLocal(grid);
    expect(result).toEqual([
      [9, 9],
      [8, 6],
    ]);
  });

  it("largestLocal should return [[2,2,2],[2,2,2],[2,2,2]] for grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]", () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const result = largestLocal(grid);
    expect(result).toEqual([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]);
  });
});
