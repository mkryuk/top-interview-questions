import { matrixScore } from "./solution";

describe("Score After Flipping Matrix", () => {
  it("matrixScore should return 39 for grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]", () => {
    const grid = [
      [0, 0, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 0],
    ];
    const result = matrixScore(grid);
    expect(result).toEqual(39);
  });

  it("matrixScore should return 1 for grid = [[0]]", () => {
    const grid = [[0]];
    const result = matrixScore(grid);
    expect(result).toEqual(1);
  });
});
