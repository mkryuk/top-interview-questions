import { numSubmatrixSumTarget } from "./solution";

describe("Number of Submatrices That Sum to Target:", () => {
  it("numSubmatrixSumTarget should return 4 for matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0", () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const target = 0;
    const result = numSubmatrixSumTarget(matrix, target);
    expect(result).toEqual(4);
  });

  it("numSubmatrixSumTarget should return 5 for matrix = [[1,-1],[-1,1]], target = 0", () => {
    const matrix = [
      [1, -1],
      [-1, 1],
    ];
    const target = 0;
    const result = numSubmatrixSumTarget(matrix, target);
    expect(result).toEqual(5);
  });

  it("numSubmatrixSumTarget should return 0 for matrix = [[904]], target = 0", () => {
    const matrix = [[904]];
    const target = 0;
    const result = numSubmatrixSumTarget(matrix, target);
    expect(result).toEqual(0);
  });
});
