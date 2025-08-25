import { findDiagonalOrder } from "./solution";

describe("498. Diagonal Traverse", () => {
  it("findDiagonalOrder should return [1,2,4,7,5,3,6,8,9] for mat = [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = findDiagonalOrder(mat);
    expect(result).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });

  it("findDiagonalOrder should return [1,2,3,4] for mat = [[1,2],[3,4]]", () => {
    const mat = [
      [1, 2],
      [3, 4],
    ];
    const result = findDiagonalOrder(mat);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
