import { minimumSum } from "./solution";

describe("3197. Find the Minimum Area to Cover All Ones II", () => {
  it("minimumSum should return 5 for grid = [[1,0,1],[1,1,1]]", () => {
    const grid = [
      [1, 0, 1],
      [1, 1, 1],
    ];
    const result = minimumSum(grid);
    expect(result).toEqual(5);
  });

  it("minimumSum should return 5 for grid = [[1,0,1,0],[0,1,0,1]]", () => {
    const grid = [
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ];
    const result = minimumSum(grid);
    expect(result).toEqual(5);
  });
});
