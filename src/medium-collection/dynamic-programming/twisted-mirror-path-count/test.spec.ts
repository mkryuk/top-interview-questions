import { uniquePaths } from "./solution";

describe("3665. Twisted Mirror Path Count:", () => {
  it("uniquePaths should return 5 for grid = [[0,1,0],[0,0,1],[1,0,0]]", () => {
    const grid = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
    ];
    const result = uniquePaths(grid);
    expect(result).toEqual(5);
  });

  it("uniquePaths should return 2 for grid = [[0,0],[0,0]]", () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    const result = uniquePaths(grid);
    expect(result).toEqual(2);
  });

  it("uniquePaths should return 1 for grid = [[0,1,1],[1,1,0]]", () => {
    const grid = [
      [0, 1, 1],
      [1, 1, 0],
    ];
    const result = uniquePaths(grid);
    expect(result).toEqual(1);
  });
});
