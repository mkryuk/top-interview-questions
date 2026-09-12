import { maximumWeight } from "./solution";

describe("3414. Maximum Score of Non-overlapping Intervals:", () => {
  it("maximumWeight should return [2,3] for intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]", () => {
    const intervals = [
      [1, 3, 2],
      [4, 5, 2],
      [1, 5, 5],
      [6, 9, 3],
      [6, 7, 1],
      [8, 9, 1],
    ];
    const result = maximumWeight(intervals);
    expect(result).toEqual([2, 3]);
  });

  it("maximumWeight should return [1,3,5,6] for intervals = [[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]]", () => {
    const intervals = [
      [5, 8, 1],
      [6, 7, 7],
      [4, 7, 3],
      [9, 10, 6],
      [7, 8, 2],
      [11, 14, 3],
      [3, 5, 5],
    ];
    const result = maximumWeight(intervals);
    expect(result).toEqual([1, 3, 5, 6]);
  });
});
