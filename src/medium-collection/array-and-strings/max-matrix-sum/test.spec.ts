import { maxMatrixSum } from "./solution";

describe("1975. Maximum Matrix Sum:", () => {
  it("maxMatrixSum should return 4 for matrix = [[1,-1],[-1,1]]", () => {
    const matrix = [
      [1, -1],
      [-1, 1],
    ];
    const result = maxMatrixSum(matrix);
    expect(result).toEqual(4);
  });

  it("maxMatrixSum should return 16 for matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]", () => {
    const matrix = [
      [1, 2, 3],
      [-1, -2, -3],
      [1, 2, 3],
    ];
    const result = maxMatrixSum(matrix);
    expect(result).toEqual(16);
  });
});
