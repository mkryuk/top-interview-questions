import { separateSquares } from "./solution";

describe("3453. Separate Squares I", () => {
  it("separateSquares should return 1.00000 for squares = [[0,0,1],[2,2,1]]", () => {
    const squares = [
      [0, 0, 1],
      [2, 2, 1],
    ];
    const result = separateSquares(squares);
    expect(result).toBeCloseTo(1);
  });

  it("separateSquares should return 1.16667 for squares = [[0,0,2],[1,1,1]]", () => {
    const squares = [
      [0, 0, 2],
      [1, 1, 1],
    ];
    const result = separateSquares(squares);
    expect(result).toBeCloseTo(1.16667);
  });
});
