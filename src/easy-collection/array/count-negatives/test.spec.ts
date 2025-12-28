import { countNegatives } from "./solution";

describe("1351. Count Negative Numbers in a Sorted Matrix", () => {
  it("countNegatives should return 8 for grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]", () => {
    const grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ];
    const result = countNegatives(grid);
    expect(result).toEqual(8);
  });

  it("countNegatives should return 0 for grid = [[3,2],[1,0]]", () => {
    const grid = [
      [3, 2],
      [1, 0],
    ];
    const result = countNegatives(grid);
    expect(result).toEqual(0);
  });
});
