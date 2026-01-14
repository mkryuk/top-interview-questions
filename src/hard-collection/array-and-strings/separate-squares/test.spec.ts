import { separateSquares } from "./solution";

describe("3454. Separate Squares II", () => {
  it("separateSquares should return 1.00000 for squares = [[0,0,1],[2,2,1]]", () => {
    const squares = [
      [0, 0, 1],
      [2, 2, 1],
    ];
    const result = separateSquares(squares);
    expect(result).toBeCloseTo(1.0);
  });

  it("separateSquares should return 1.00000 for squares = [[0,0,2],[1,1,1]]", () => {
    const squares = [
      [0, 0, 2],
      [1, 1, 1],
    ];
    const result = separateSquares(squares);
    expect(result).toBeCloseTo(1.0);
  });
});
