import { getMaximumGold } from "./solution";

describe("Path with Maximum Gold", () => {
  it("getMaximumGold should return 24 for grid = [[0,6,0],[5,8,7],[0,9,0]]", () => {
    const grid = [
      [0, 6, 0],
      [5, 8, 7],
      [0, 9, 0],
    ];
    const result = getMaximumGold(grid);
    expect(result).toEqual(24);
  });

  it("getMaximumGold should return 28 for grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]", () => {
    const grid = [
      [1, 0, 7],
      [2, 0, 6],
      [3, 4, 5],
      [0, 3, 0],
      [9, 0, 20],
    ];
    const result = getMaximumGold(grid);
    expect(result).toEqual(28);
  });
});
