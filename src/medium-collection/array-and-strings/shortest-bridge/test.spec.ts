import { shortestBridge } from "./solution";

describe("Shortest Bridge", () => {
  it("shortestBridge should return 1 for grid = [[0,1],[1,0]]", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    const result = shortestBridge(grid);
    expect(result).toEqual(1);
  });

  it("shortestBridge should return 2 for grid = [[0,1,0],[0,0,0],[0,0,1]]", () => {
    const grid = [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    const result = shortestBridge(grid);
    expect(result).toEqual(2);
  });

  it("shortestBridge should return 1 for grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]", () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ];
    const result = shortestBridge(grid);
    expect(result).toEqual(1);
  });
});
