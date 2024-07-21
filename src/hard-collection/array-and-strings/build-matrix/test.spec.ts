import { buildMatrix } from "./solution";

describe("Build a Matrix With Conditions", () => {
  it("buildMatrix should return [[3,0,0],[0,0,1],[0,2,0]] for k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]", () => {
    const k = 3;
    const rowConditions = [
      [1, 2],
      [3, 2],
    ];
    const colConditions = [
      [2, 1],
      [3, 2],
    ];
    const result = buildMatrix(k, rowConditions, colConditions);
    expect(result).toEqual([
      [3, 0, 0],
      [0, 0, 1],
      [0, 2, 0],
    ]);
  });

  it("buildMatrix should return [] for k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]", () => {
    const k = 3;
    const rowConditions = [
      [1, 2],
      [2, 3],
      [3, 1],
      [2, 3],
    ];
    const colConditions = [[2, 1]];
    const result = buildMatrix(k, rowConditions, colConditions);
    expect(result).toEqual([]);
  });
});
