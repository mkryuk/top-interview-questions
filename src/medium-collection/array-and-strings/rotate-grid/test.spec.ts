import { rotateGrid } from "./solution";

describe("1914. Cyclically Rotating a Grid:", () => {
  it("rotateGrid should return [[10,20],[40,30]] for grid = [[40,10],[30,20]], k = 1", () => {
    const grid = [
      [40, 10],
      [30, 20],
    ];
    const k = 1;
    const result = rotateGrid(grid, k);
    expect(result).toEqual([
      [10, 20],
      [40, 30],
    ]);
  });

  it("rotateGrid should return [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]] for grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const k = 2;
    const result = rotateGrid(grid, k);
    expect(result).toEqual([
      [3, 4, 8, 12],
      [2, 11, 10, 16],
      [1, 7, 6, 15],
      [5, 9, 13, 14],
    ]);
  });
});
