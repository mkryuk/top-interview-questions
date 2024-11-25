import { slidingPuzzle } from "./solution";

describe("Sliding Puzzle", () => {
  it("slidingPuzzle should return 1 for board = [[1,2,3],[4,0,5]]", () => {
    const board = [
      [1, 2, 3],
      [4, 0, 5],
    ];
    const result = slidingPuzzle(board);
    expect(result).toEqual(1);
  });

  it("slidingPuzzle should return -1 for board = [[1,2,3],[5,4,0]]", () => {
    const board = [
      [1, 2, 3],
      [5, 4, 0],
    ];
    const result = slidingPuzzle(board);
    expect(result).toEqual(-1);
  });

  it("slidingPuzzle should return 5 for board = [[4,1,2],[5,0,3]]", () => {
    const board = [
      [4, 1, 2],
      [5, 0, 3],
    ];
    const result = slidingPuzzle(board);
    expect(result).toEqual(5);
  });
});
