import { minimumCost } from "./solution";

describe("Minimum Cost Walk in Weighted Graph", () => {
  it("minimumCost should return [1,-1] for n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]", () => {
    const n = 5;
    const edges = [
      [0, 1, 7],
      [1, 3, 7],
      [1, 2, 1],
    ];
    const query = [
      [0, 3],
      [3, 4],
    ];
    const result = minimumCost(n, edges, query);
    expect(result).toEqual([1, -1]);
  });

  it("minimumCost should return [0] for n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], query = [[1,2]]", () => {
    const n = 3;
    const edges = [
      [0, 2, 7],
      [0, 1, 15],
      [1, 2, 6],
      [1, 2, 1],
    ];
    const query = [[1, 2]];
    const result = minimumCost(n, edges, query);
    expect(result).toEqual([0]);
  });
});
