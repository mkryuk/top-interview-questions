import { countSquares } from "./solution";

describe("Count Square Submatrices with All Ones", () => {
  it("countSquares should return 15 for matrix =[[0,1,1,1], [1,1,1,1], [0,1,1,1]]", () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ];
    const result = countSquares(matrix);
    expect(result).toEqual(15);
  });

  it("countSquares should return 7 for matrix = [[1,0,1], [1,1,0], [1,1,0]]", () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = countSquares(matrix);
    expect(result).toEqual(7);
  });
});
