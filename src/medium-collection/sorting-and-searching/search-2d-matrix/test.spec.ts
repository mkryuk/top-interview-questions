import { searchMatrix } from "./solution";

describe("Search a 2D Matrix:", () => {
  it("searchMatrix should return true for matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;
    const result = searchMatrix(matrix, target);
    expect(result).toBeTrue();
  });

  it("searchMatrix should return false for matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 13;
    const result = searchMatrix(matrix, target);
    expect(result).toBeFalse();
  });

  it("searchMatrix should return true for matrix = [[1]], target = 1", () => {
    const matrix = [[1]];
    const target = 1;
    const result = searchMatrix(matrix, target);
    expect(result).toBeTrue();
  });

  it("searchMatrix should return true for matrix = [[1,3]], target = 3", () => {
    const matrix = [[1, 3]];
    const target = 3;
    const result = searchMatrix(matrix, target);
    expect(result).toBeTrue();
  });

  it("searchMatrix should return true for matrix = [[1,2,3],[4,5,6],[7,8,9]] target = 9", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const target = 9;
    const result = searchMatrix(matrix, target);
    expect(result).toBeTrue();
  });

  it("searchMatrix should return true for matrix = [[1,2,3],[4,5,6],[7,8,9]] target = 1", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const target = 1;
    const result = searchMatrix(matrix, target);
    expect(result).toBeTrue();
  });

  it("searchMatrix should return false for matrix = [[5,6,7],[8,9,10]] target = 1", () => {
    const matrix = [
      [5, 6, 7],
      [8, 9, 10],
    ];
    const target = 1;
    const result = searchMatrix(matrix, target);
    expect(result).toBeFalse();
  });
});
