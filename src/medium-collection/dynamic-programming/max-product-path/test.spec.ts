import { maxProductPath } from "./solution";

describe("Maximum Non Negative Product in a Matrix:", () => {
  it("maxProductPath should return -1 for grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]", () => {
    const grid = [
      [-1, -2, -3],
      [-2, -3, -3],
      [-3, -3, -2],
    ];
    const result = maxProductPath(grid);
    expect(result).toBe(-1);
  });

  it("maxProductPath should return 8 for grid = [[1,-2,1],[1,-2,1],[3,-4,1]]", () => {
    const grid = [
      [1, -2, 1],
      [1, -2, 1],
      [3, -4, 1],
    ];
    const result = maxProductPath(grid);
    expect(result).toBe(8);
  });

  it("maxProductPath should return 0 for grid = [[1,3],[0,-4]]", () => {
    const grid = [
      [1, 3],
      [0, -4],
    ];
    const result = maxProductPath(grid);
    expect(result).toBe(0);
  });

  it("maxProductPath should return 0 when every path includes zero and no positive product exists", () => {
    const grid = [
      [1, 2],
      [0, -1],
    ];
    const result = maxProductPath(grid);
    expect(result).toBe(0);
  });
});
