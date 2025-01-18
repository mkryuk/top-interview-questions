import { minCost } from "./solution";

describe("Minimum Cost to Make at Least One Valid Path in a Grid", () => {
  it("minCost should return 3 for grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]", () => {
    const grid = [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [1, 1, 1, 1],
      [2, 2, 2, 2],
    ];
    const result = minCost(grid);
    expect(result).toEqual(3);
  });

  it("minCost should return 0 for grid = [[1,1,3],[3,2,2],[1,1,4]]", () => {
    const grid = [
      [1, 1, 3],
      [3, 2, 2],
      [1, 1, 4],
    ];
    const result = minCost(grid);
    expect(result).toEqual(0);
  });

  it("minCost should return 1 for grid = [[1,2],[4,3]]", () => {
    const grid = [
      [1, 2],
      [4, 3],
    ];
    const result = minCost(grid);
    expect(result).toEqual(1);
  });
});
