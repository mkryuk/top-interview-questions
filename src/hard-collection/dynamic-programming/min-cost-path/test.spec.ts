import { minCost } from "./solution";

describe("3651. Minimum Cost Path with Teleportations", () => {
  it("minCost should return 7 for grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2", () => {
    const grid = [
      [1, 3, 3],
      [2, 5, 4],
      [4, 3, 5],
    ];
    const k = 2;
    const result = minCost(grid, k);
    expect(result).toEqual(7);
  });

  it("minCost should return 9 for grid = [[1,2],[2,3],[3,4]], k = 1", () => {
    const grid = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const k = 1;
    const result = minCost(grid, k);
    expect(result).toEqual(9);
  });
});
