import { validArrangement } from "./solution";

describe("Valid Arrangement of Pairs", () => {
  it("validArrangement should return [[11,9],[9,4],[4,5],[5,1]] for pairs = [[5,1],[4,5],[11,9],[9,4]]", () => {
    const pairs = [
      [5, 1],
      [4, 5],
      [11, 9],
      [9, 4],
    ];
    const result = validArrangement(pairs);
    expect(result).toEqual([
      [11, 9],
      [9, 4],
      [4, 5],
      [5, 1],
    ]);
  });

  it("validArrangement should return [[1,3],[3,2],[2,1]] for pairs = [[1,3],[3,2],[2,1]]", () => {
    const pairs = [
      [1, 3],
      [3, 2],
      [2, 1],
    ];
    const result = validArrangement(pairs);
    expect(result).toEqual([
      [1, 3],
      [3, 2],
      [2, 1],
    ]);
  });

  it("validArrangement should return [[1,2],[2,1],[1,3]] for pairs = [[1,2],[1,3],[2,1]]", () => {
    const pairs = [
      [1, 2],
      [1, 3],
      [2, 1],
    ];
    const result = validArrangement(pairs);
    expect(result).toEqual([
      [1, 2],
      [2, 1],
      [1, 3],
    ]);
  });
});
