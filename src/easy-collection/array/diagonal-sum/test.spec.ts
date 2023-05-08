import { diagonalSum } from "./solution";

describe("Matrix Diagonal Sum", () => {
  it("diagonalSum should pass test 1", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = diagonalSum(mat);
    expect(result).toEqual(25);
  });

  it("diagonalSum should pass test 2", () => {
    const mat = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    const result = diagonalSum(mat);
    expect(result).toEqual(8);
  });

  it("diagonalSum should pass test 3", () => {
    const mat = [[5]];
    const result = diagonalSum(mat);
    expect(result).toEqual(5);
  });
});
