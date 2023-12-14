import { onesMinusZeros } from "./solution";

describe("Difference Between Ones and Zeros in Row and Column:", () => {
  it("onesMinusZeros should return [[0,0,4],[0,0,4],[-2,-2,2]] for grid = [[0,1,1],[1,0,1],[0,0,1]]", () => {
    const grid = [
      [0, 1, 1],
      [1, 0, 1],
      [0, 0, 1],
    ];
    const result = onesMinusZeros(grid);
    expect(result).toEqual([
      [0, 0, 4],
      [0, 0, 4],
      [-2, -2, 2],
    ]);
  });

  it("onesMinusZeros should return [[5,5,5],[5,5,5]] for grid = [[1,1,1],[1,1,1]]", () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
    ];
    const result = onesMinusZeros(grid);
    expect(result).toEqual([
      [5, 5, 5],
      [5, 5, 5],
    ]);
  });
});
