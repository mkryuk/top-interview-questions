import { transpose } from "./solution";

describe("Transpose Matrix:", () => {
  it("transpose should return [[1,4,7],[2,5,8],[3,6,9]] for matrix = [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = transpose(matrix);
    expect(result).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  it("transpose should return [[1,4],[2,5],[3,6]] for matrix = [[1,2,3],[4,5,6]]", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = transpose(matrix);
    expect(result).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
