import { shiftGrid } from "./solution";

describe("1260. Shift 2D Grid:", () => {
  it("should shift grid for example 1", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const k = 1;
    const result = shiftGrid(grid, k);
    expect(result).toEqual([
      [9, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
  });

  it("should shift grid for example 2", () => {
    const grid = [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ];
    const k = 4;
    const result = shiftGrid(grid, k);
    expect(result).toEqual([
      [12, 0, 21, 13],
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
    ]);
  });

  it("should shift grid for example 3", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const k = 9;
    const result = shiftGrid(grid, k);
    expect(result).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
