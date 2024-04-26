import { minFallingPathSum } from "./solution";

describe("Minimum Falling Path Sum II", () => {
  it("minFallingPathSum should return 13 for grid = [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = minFallingPathSum(grid);
    expect(result).toEqual(13);
  });

  it("minFallingPathSum should return 7 for grid = [[7]]", () => {
    const grid = [[7]];
    const result = minFallingPathSum(grid);
    expect(result).toEqual(7);
  });
});
