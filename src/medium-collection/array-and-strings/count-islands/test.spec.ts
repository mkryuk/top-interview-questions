import { countIslands } from "./solution";

describe("3619. Count Islands With Total Value Divisible by K:", () => {
  it("countIslands should return 2 for example 1 with k = 5", () => {
    const grid = [
      [0, 2, 1, 0, 0],
      [0, 5, 0, 0, 5],
      [0, 0, 1, 0, 0],
      [0, 1, 4, 7, 0],
      [0, 2, 0, 0, 8],
    ];
    const k = 5;
    const result = countIslands(grid, k);
    expect(result).toEqual(2);
  });

  it("countIslands should return 6 for example 2 with k = 3", () => {
    const grid = [
      [3, 0, 3, 0],
      [0, 3, 0, 3],
      [3, 0, 3, 0],
    ];
    const k = 3;
    const result = countIslands(grid, k);
    expect(result).toEqual(6);
  });
});
