import { islandPerimeter } from "./solution";

describe("Island Perimeter", () => {
  it("islandPerimeter should return 16 for grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]", () => {
    const grid = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ];
    const result = islandPerimeter(grid);
    expect(result).toEqual(16);
  });

  it("islandPerimeter should return 4 for grid = [[1]]", () => {
    const grid = [[1]];
    const result = islandPerimeter(grid);
    expect(result).toEqual(4);
  });

  it("islandPerimeter should return 4 for grid = [[1,0]]", () => {
    const grid = [[1, 0]];
    const result = islandPerimeter(grid);
    expect(result).toEqual(4);
  });

  it("islandPerimeter should return 4 for grid = [[0,1]]", () => {
    const grid = [[0, 1]];
    const result = islandPerimeter(grid);
    expect(result).toEqual(4);
  });

  it("islandPerimeter should return 8 for grid = [[1,1],[1,1]]", () => {
    const grid = [
      [1, 1],
      [1, 1],
    ];
    const result = islandPerimeter(grid);
    expect(result).toEqual(8);
  });
});
