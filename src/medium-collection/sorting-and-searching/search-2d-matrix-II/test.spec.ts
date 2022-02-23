import { searchMatrix } from "./solution";

it("searchMatrix should return true for matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5", () => {
  const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    target = 5;
  const result = searchMatrix(matrix, target);
  expect(result).toBeTrue();
});

it("searchMatrix should return false for matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20", () => {
  const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    target = 20;
  const result = searchMatrix(matrix, target);
  expect(result).toBeFalse();
});

it("searchMatrix should return true for matrix = [[1,2,3,10,18],[4,5,6,13,21],[7,8,9,14,23],[11,12,16,17,26],[15,19,22,24,30]], target = 5", () => {
  const matrix = [
      [1, 2, 3, 10, 18],
      [4, 5, 6, 13, 21],
      [7, 8, 9, 14, 23],
      [11, 12, 16, 17, 26],
      [15, 19, 22, 24, 30],
    ],
    target = 5;
  const result = searchMatrix(matrix, target);
  expect(result).toBeTrue();
});

it("searchMatrix should return true for matrix = [[-5]], target = -5", () => {
  const matrix = [[-5]],
    target = -5;
  const result = searchMatrix(matrix, target);
  expect(result).toBeTrue();
});
