import { getBiggestThree } from "./solution";

describe("Get Biggest Three Rhombus Sums in a Grid", () => {
  it("getBiggestThree should return [228,216,211] for grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]", () => {
    const grid = [
      [3, 4, 5, 1, 3],
      [3, 3, 4, 2, 3],
      [20, 30, 200, 40, 10],
      [1, 5, 5, 4, 1],
      [4, 3, 2, 2, 5],
    ];
    const result = getBiggestThree(grid);
    expect(result).toEqual([228, 216, 211]);
  });

  it("getBiggestThree should return [20,9,8] for grid = [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = getBiggestThree(grid);
    expect(result).toEqual([20, 9, 8]);
  });

  it("getBiggestThree should return [7] for grid = [[7,7,7]]", () => {
    const grid = [[7, 7, 7]];
    const result = getBiggestThree(grid);
    expect(result).toEqual([7]);
  });
});
