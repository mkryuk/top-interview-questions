import { reverseSubmatrix } from "./solution";

describe("3643. Flip Square Submatrix Vertically", () => {
  it("reverseSubmatrix should return [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]] for grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = reverseSubmatrix(grid, 1, 0, 3);
    expect(result).toEqual([
      [1, 2, 3, 4],
      [13, 14, 15, 8],
      [9, 10, 11, 12],
      [5, 6, 7, 16],
    ]);
  });

  it("reverseSubmatrix should return [[3,4,4,2],[2,3,2,3]] for grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2", () => {
    const grid = [
      [3, 4, 2, 3],
      [2, 3, 4, 2],
    ];
    const result = reverseSubmatrix(grid, 0, 2, 2);
    expect(result).toEqual([
      [3, 4, 4, 2],
      [2, 3, 2, 3],
    ]);
  });
});
