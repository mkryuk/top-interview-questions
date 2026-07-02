import { findSafeWalk } from "./solution";

describe("3286. Find a Safe Walk Through a Grid:", () => {
  it("findSafeWalk should return true for grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1", () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
    ];
    const health = 1;
    const result = findSafeWalk(grid, health);
    expect(result).toEqual(true);
  });

  it("findSafeWalk should return false for grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3", () => {
    const grid = [
      [0, 1, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 1],
      [0, 0, 1, 0, 1, 0],
    ];
    const health = 3;
    const result = findSafeWalk(grid, health);
    expect(result).toEqual(false);
  });

  it("findSafeWalk should return true for grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5", () => {
    const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const health = 5;
    const result = findSafeWalk(grid, health);
    expect(result).toEqual(true);
  });
});
