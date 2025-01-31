import { largestIsland } from "./solution";

describe("Making A Large Island", () => {
  it("largestIsland should return 3 for grid = [[1,0],[0,1]]", () => {
    const grid = [
      [1, 0],
      [0, 1],
    ];
    const result = largestIsland(grid);
    expect(result).toEqual(3);
  });

  it("largestIsland should return 4 for grid = [[1,1],[1,0]]", () => {
    const grid = [
      [1, 1],
      [1, 0],
    ];
    const result = largestIsland(grid);
    expect(result).toEqual(4);
  });

  it("largestIsland should return 4 for grid = [[1,1],[1,1]]", () => {
    const grid = [
      [1, 1],
      [1, 1],
    ];
    const result = largestIsland(grid);
    expect(result).toEqual(4);
  });
});
