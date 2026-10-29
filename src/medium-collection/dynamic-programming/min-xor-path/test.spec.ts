import { minCost } from "./solution";

describe("3882. Minimum XOR Path in a Grid:", () => {
  it("minCost should return 6 for grid = [[1,2],[3,4]]", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const result = minCost(grid);
    expect(result).toEqual(6);
  });

  it("minCost should return 9 for grid = [[6,7],[5,8]]", () => {
    const grid = [
      [6, 7],
      [5, 8],
    ];
    const result = minCost(grid);
    expect(result).toEqual(9);
  });

  it("minCost should return 0 for grid = [[2,7,5]]", () => {
    const grid = [[2, 7, 5]];
    const result = minCost(grid);
    expect(result).toEqual(0);
  });
});
