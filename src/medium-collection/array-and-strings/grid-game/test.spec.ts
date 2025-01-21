import { gridGame } from "./solution";

describe("Grid Game", () => {
  it("gridGame should return 4 for grid = [[2,5,4],[1,5,1]]", () => {
    const grid = [
      [2, 5, 4],
      [1, 5, 1],
    ];
    const result = gridGame(grid);
    expect(result).toEqual(4);
  });

  it("gridGame should return 4 for grid = [[3,3,1],[8,5,2]]", () => {
    const grid = [
      [3, 3, 1],
      [8, 5, 2],
    ];
    const result = gridGame(grid);
    expect(result).toEqual(4);
  });

  it("gridGame should return 7 for grid = [[1,3,1,15],[1,3,3,1]]", () => {
    const grid = [
      [1, 3, 1, 15],
      [1, 3, 3, 1],
    ];
    const result = gridGame(grid);
    expect(result).toEqual(7);
  });
});
