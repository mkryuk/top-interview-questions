import { countSubIslands } from "./solution";

describe("Count Sub Islands", () => {
  it("countSubIslands should return 3 for grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]", () => {
    const grid1 = [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ];
    const grid2 = [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ];
    const result = countSubIslands(grid1, grid2);
    expect(result).toEqual(3);
  });

  it("countSubIslands should return 2 for grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]", () => {
    const grid1 = [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
    ];
    const grid2 = [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ];
    const result = countSubIslands(grid1, grid2);
    expect(result).toEqual(2);
  });
});
