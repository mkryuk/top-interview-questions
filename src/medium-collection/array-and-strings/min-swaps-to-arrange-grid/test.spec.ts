import { minSwaps } from "./solution";

describe("Minimum Swaps to Arrange a Binary Grid:", () => {
  it("minSwaps should return 3 for grid = [[0,0,1],[1,1,0],[1,0,0]]", () => {
    const grid = [
      [0, 0, 1],
      [1, 1, 0],
      [1, 0, 0],
    ];
    const result = minSwaps(grid);
    expect(result).toEqual(3);
  });

  it("minSwaps should return -1 for grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]", () => {
    const grid = [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
    ];
    const result = minSwaps(grid);
    expect(result).toEqual(-1);
  });

  it("minSwaps should return 0 for grid = [[1,0,0],[1,1,0],[1,1,1]]", () => {
    const grid = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ];
    const result = minSwaps(grid);
    expect(result).toEqual(0);
  });
});
