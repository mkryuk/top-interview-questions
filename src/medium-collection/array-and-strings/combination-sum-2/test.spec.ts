import { combinationSum2 } from "./solution";

describe("Combination Sum II", () => {
  it("combinationSum2 should return [[1,1,6],[1,2,5],[1,7],[2,6]] for candidates = [10,1,2,7,6,1,5], target = 8", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;
    const result = combinationSum2(candidates, target);
    expect(result).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
  });

  it("combinationSum2 should return ([[1, 2, 2], [5]] for candidates = [2,5,2,1,2], target = 5", () => {
    const candidates = [2, 5, 2, 1, 2];
    const target = 5;
    const result = combinationSum2(candidates, target);
    expect(result).toEqual([[1, 2, 2], [5]]);
  });
});
