import { findMaxFish } from "./solution";

describe("Maximum Number of Fish in a Grid", () => {
  it("findMaxFish should return 7 for grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]", () => {
    const grid = [
      [0, 2, 1, 0],
      [4, 0, 0, 3],
      [1, 0, 0, 4],
      [0, 3, 2, 0],
    ];
    const result = findMaxFish(grid);
    expect(result).toEqual(7);
  });

  it("findMaxFish should return 1 for grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]", () => {
    const grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ];
    const result = findMaxFish(grid);
    expect(result).toEqual(1);
  });
});
