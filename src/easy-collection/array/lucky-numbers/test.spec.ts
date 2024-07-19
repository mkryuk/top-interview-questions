import { luckyNumbers } from "./solution";

describe("Lucky Numbers in a Matrix", () => {
  it("luckyNumbers should return [15] for matrix = [[3,7,8],[9,11,13],[15,16,17]]", () => {
    const matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ];
    const result = luckyNumbers(matrix);
    expect(result).toEqual([15]);
  });

  it("luckyNumbers should return [12] for matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]", () => {
    const matrix = [
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12],
    ];
    const result = luckyNumbers(matrix);
    expect(result).toEqual([12]);
  });

  it("luckyNumbers should return [7] for matrix = [[7,8],[1,2]]", () => {
    const matrix = [
      [7, 8],
      [1, 2],
    ];
    const result = luckyNumbers(matrix);
    expect(result).toEqual([7]);
  });
});
