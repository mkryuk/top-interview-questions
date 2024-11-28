import { minimumObstacles } from "./solution";

describe("Minimum Obstacle Removal to Reach Corner", () => {
  it("minimumObstacles should return 2 for grid = [[0,1,1],[1,1,0],[1,1,0]]", () => {
    const grid = [
      [0, 1, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = minimumObstacles(grid);
    expect(result).toEqual(2);
  });

  it("minimumObstacles should return 0 for grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]", () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
    ];
    const result = minimumObstacles(grid);
    expect(result).toEqual(2);
  });
});
