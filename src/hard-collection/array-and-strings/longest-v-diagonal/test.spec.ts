import { lenOfVDiagonal } from "./solution";

describe("3459. Length of Longest V-Shaped Diagonal Segment", () => {
  it("lenOfVDiagonal should return 5 for grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]", () => {
    const grid = [
      [2, 2, 1, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toEqual(5);
  });

  it("lenOfVDiagonal should return 4 for  grid = [[2,2,2,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]", () => {
    const grid = [
      [2, 2, 2, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toEqual(4);
  });

  it("lenOfVDiagonal should return 5 for  grid = [[1,2,2,2,2],[2,2,2,2,0],[2,0,0,0,0],[0,0,2,2,2],[2,0,0,2,0]]", () => {
    const grid = [
      [1, 2, 2, 2, 2],
      [2, 2, 2, 2, 0],
      [2, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [2, 0, 0, 2, 0],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toEqual(5);
  });

  it("lenOfVDiagonal should return 1 for  grid = [[1]]", () => {
    const grid = [[1]];
    const result = lenOfVDiagonal(grid);
    expect(result).toEqual(1);
  });
});
