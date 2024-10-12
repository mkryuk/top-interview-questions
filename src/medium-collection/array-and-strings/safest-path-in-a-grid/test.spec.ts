import { maximumSafenessFactor } from "./solution";

describe("Find the Safest Path in a Grid", () => {
  it("maximumSafenessFactor should return 0 for grid = [[1,0,0],[0,0,0],[0,0,1]]", () => {
    const grid = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    const result = maximumSafenessFactor(grid);
    expect(result).toEqual(0);
  });

  it("maximumSafenessFactor should return 2 for grid = [[1,0,0],[0,0,0],[0,0,1]]", () => {
    const grid = [
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const result = maximumSafenessFactor(grid);
    expect(result).toEqual(2);
  });

  it("maximumSafenessFactor should return 2 for grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]", () => {
    const grid = [
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
    ];
    const result = maximumSafenessFactor(grid);
    expect(result).toEqual(2);
  });
});
