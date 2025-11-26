import { numberOfPaths } from "./solution";

describe("2435. Paths in Matrix Whose Sum Is Divisible by K", () => {
  it("numberOfPaths should return 2 for grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3", () => {
    const grid = [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ];
    const k = 3;
    const result = numberOfPaths(grid, k);
    expect(result).toEqual(2);
  });

  it("numberOfPaths should return 1 for grid = [[0,0]], k = 5", () => {
    const grid = [[0, 0]];
    const k = 5;
    const result = numberOfPaths(grid, k);
    expect(result).toEqual(1);
  });

  it("numberOfPaths should return 10 for grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1", () => {
    const grid = [
      [7, 3, 4, 9],
      [2, 3, 6, 2],
      [2, 3, 7, 0],
    ];
    const k = 1;
    const result = numberOfPaths(grid, k);
    expect(result).toEqual(10);
  });
});
