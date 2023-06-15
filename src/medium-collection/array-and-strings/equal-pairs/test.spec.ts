import { equalPairs } from "./solution";

describe("Equal Row and Column Pairs:", () => {
  it("equalPairs should return 1 for grid = [[3,2,1],[1,7,6],[2,7,7]]", () => {
    const grid = [
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ];
    const result = equalPairs(grid);
    expect(result).toEqual(1);
  });

  it("equalPairs should return 3 for grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]", () => {
    const grid = [
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ];
    const result = equalPairs(grid);
    expect(result).toEqual(3);
  });

  it("equalPairs should return 2 for [[11,1],[1,11]]", () => {
    const grid = [
      [11, 1],
      [1, 11],
    ];
    const result = equalPairs(grid);
    expect(result).toEqual(2);
  });
});
