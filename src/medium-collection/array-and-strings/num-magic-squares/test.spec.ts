import { numMagicSquaresInside } from "./solution";

describe("Magic Squares In Grid", () => {
  it("numMagicSquaresInside should return 1 for grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]", () => {
    const grid = [
      [4, 3, 8, 4],
      [9, 5, 1, 9],
      [2, 7, 6, 2],
    ];
    const result = numMagicSquaresInside(grid);
    expect(result).toEqual(1);
  });
});
