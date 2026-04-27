import { hasValidPath } from "./solution";

describe("1391. Check if There is a Valid Path in a Grid:", () => {
  it("hasValidPath should return true for grid = [[2,4,3],[6,5,2]]", () => {
    const grid = [
      [2, 4, 3],
      [6, 5, 2],
    ];
    const result = hasValidPath(grid);
    expect(result).toEqual(true);
  });

  it("hasValidPath should return false for grid = [[1,2,1],[1,2,1]]", () => {
    const grid = [
      [1, 2, 1],
      [1, 2, 1],
    ];
    const result = hasValidPath(grid);
    expect(result).toEqual(false);
  });

  it("hasValidPath should return false for grid = [[1,1,2]]", () => {
    const grid = [[1, 1, 2]];
    const result = hasValidPath(grid);
    expect(result).toEqual(false);
  });
});
