import { minimumArea } from "./solution";

describe("3195. Find the Minimum Area to Cover All Ones I", () => {
  it("minimumArea should return 6 for grid = [[0,1,0],[1,0,1]]", () => {
    const grid = [
      [0, 1, 0],
      [1, 0, 1],
    ];
    const result = minimumArea(grid);
    expect(result).toEqual(6);
  });

  it("minimumArea should return 1 for grid = [[1,0],[0,0]]", () => {
    const grid = [
      [1, 0],
      [0, 0],
    ];
    const result = minimumArea(grid);
    expect(result).toEqual(1);
  });
});
