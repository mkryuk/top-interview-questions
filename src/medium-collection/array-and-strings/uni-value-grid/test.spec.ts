import { minOperations } from "./solution";

describe("Minimum Operations to Make a Uni-Value Grid", () => {
  it("minOperations should return 4 for grid = [[2,4],[6,8]], x = 2", () => {
    const grid = [
      [2, 4],
      [6, 8],
    ];
    const x = 2;
    const result = minOperations(grid, x);
    expect(result).toEqual(4);
  });

  it("minOperations should return 5 for grid = [[1,5],[2,3]], x = 1", () => {
    const grid = [
      [1, 5],
      [2, 3],
    ];
    const x = 1;
    const result = minOperations(grid, x);
    expect(result).toEqual(5);
  });

  it("minOperations should return -1 for grid = [[1,2],[3,4]], x = 2", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const x = 2;
    const result = minOperations(grid, x);
    expect(result).toEqual(-1);
  });
});
