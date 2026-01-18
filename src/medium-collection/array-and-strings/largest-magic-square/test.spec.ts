import { largestMagicSquare } from "./solution";

describe("1895. Largest Magic Square", () => {
  it("largestMagicSquare should return 3 for grid = [[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]", () => {
    const grid = [
      [7, 1, 4, 5, 6],
      [2, 5, 1, 6, 4],
      [1, 5, 4, 3, 2],
      [1, 2, 7, 3, 4],
    ];
    const result = largestMagicSquare(grid);
    expect(result).toEqual(3);
  });

  it("largestMagicSquare should return 2 for grid = [[5,1,3,1],[9,3,3,1],[1,3,3,8]]", () => {
    const grid = [
      [5, 1, 3, 1],
      [9, 3, 3, 1],
      [1, 3, 3, 8],
    ];
    const result = largestMagicSquare(grid);
    expect(result).toEqual(2);
  });
});
