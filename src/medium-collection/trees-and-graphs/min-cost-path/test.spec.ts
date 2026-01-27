import { minCost } from "./solution";

describe("3650. Minimum Cost Path with Edge Reversals", () => {
  it("minCost should return 5 for n = 4, edges = [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]", () => {
    const n = 4;
    const edges = [
      [0, 1, 3],
      [3, 1, 1],
      [2, 3, 4],
      [0, 2, 2],
    ];
    const result = minCost(n, edges);
    expect(result).toEqual(5);
  });

  it("minCost should return 3 for n = 4, edges = [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]", () => {
    const n = 4;
    const edges = [
      [0, 2, 1],
      [2, 1, 1],
      [1, 3, 1],
      [2, 3, 3],
    ];
    const result = minCost(n, edges);
    expect(result).toEqual(3);
  });
});
