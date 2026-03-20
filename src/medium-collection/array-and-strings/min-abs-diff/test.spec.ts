import { minAbsDiff } from "./solution";

describe("Minimum Absolute Difference in Sliding Submatrix", () => {
  it("minAbsDiff should return [[2]] for grid = [[1,8],[3,-2]], k = 2", () => {
    const grid = [
      [1, 8],
      [3, -2],
    ];
    const k = 2;
    const result = minAbsDiff(grid, k);
    expect(result).toEqual([[2]]);
  });

  it("minAbsDiff should return [[0,0]] for grid = [[3,-1]], k = 1", () => {
    const grid = [[3, -1]];
    const k = 1;
    const result = minAbsDiff(grid, k);
    expect(result).toEqual([[0, 0]]);
  });

  it("minAbsDiff should return [[1,2]] for grid = [[1,-2,3],[2,3,5]], k = 2", () => {
    const grid = [
      [1, -2, 3],
      [2, 3, 5],
    ];
    const k = 2;
    const result = minAbsDiff(grid, k);
    expect(result).toEqual([[1, 2]]);
  });
});
