import { maxPathScore } from "./solution";

describe("3742. Maximum Path Score in a Grid:", () => {
  it("maxPathScore should return 2 for grid = [[0,1],[2,0]], k = 1", function () {
    const grid = [
      [0, 1],
      [2, 0],
    ];
    const k = 1;

    expect(maxPathScore(grid, k)).toEqual(2);
  });

  it("maxPathScore should return -1 for grid = [[0,1],[1,2]], k = 1", function () {
    const grid = [
      [0, 1],
      [1, 2],
    ];
    const k = 1;

    expect(maxPathScore(grid, k)).toEqual(-1);
  });
});
