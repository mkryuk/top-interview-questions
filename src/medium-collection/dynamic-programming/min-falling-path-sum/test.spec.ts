import { minFallingPathSum } from "./solution";

describe("Minimum Falling Path Sum:", () => {
  it("minFallingPathSum should return 13 for matrix = [[2,1,3],[6,5,4],[7,8,9]]", () => {
    const matrix = [
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ];
    const result = minFallingPathSum(matrix);
    expect(result).toEqual(13);
  });

  it("minFallingPathSum should return -59 for matrix = [[-19,57],[-40,-5]]", () => {
    const matrix = [
      [-19, 57],
      [-40, -5],
    ];
    const result = minFallingPathSum(matrix);
    expect(result).toEqual(-59);
  });
});
