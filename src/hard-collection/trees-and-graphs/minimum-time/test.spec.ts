import { minimumTime } from "./solution";

describe("Minimum Time to Visit a Cell In a Grid", () => {
  it("minimumTime should return 7 for grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]", () => {
    const grid = [
      [0, 1, 3, 2],
      [5, 1, 2, 5],
      [4, 3, 8, 6],
    ];
    const result = minimumTime(grid);
    expect(result).toEqual(7);
  });

  it("minimumTime should return -1 for grid = [[0,2,4],[3,2,1],[1,0,4]]", () => {
    const grid = [
      [0, 2, 4],
      [3, 2, 1],
      [1, 0, 4],
    ];
    const result = minimumTime(grid);
    expect(result).toEqual(-1);
  });
});
