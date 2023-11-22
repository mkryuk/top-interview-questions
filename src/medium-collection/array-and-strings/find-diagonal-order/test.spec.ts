import { findDiagonalOrder } from "./solution";

describe("Diagonal Traverse II:", () => {
  it("findDiagonalOrder should return [1,4,2,7,5,3,8,6,9] for nums = [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = findDiagonalOrder(nums);
    expect(result).toEqual([1, 4, 2, 7, 5, 3, 8, 6, 9]);
  });

  it("findDiagonalOrder should return [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16] for nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]", () => {
    const nums = [
      [1, 2, 3, 4, 5],
      [6, 7],
      [8],
      [9, 10, 11],
      [12, 13, 14, 15, 16],
    ];
    const result = findDiagonalOrder(nums);
    expect(result).toEqual([
      1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16,
    ]);
  });
});
