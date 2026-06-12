import { assignEdgeWeights } from "./solution";

describe("3559. Number of Ways to Assign Edge Weights II:", () => {
  it("assignEdgeWeights should return [0,1] for edges = [[1,2]], queries = [[1,1],[1,2]]", () => {
    const edges = [[1, 2]];
    const queries = [
      [1, 1],
      [1, 2],
    ];
    const result = assignEdgeWeights(edges, queries);
    expect(result).toEqual([0, 1]);
  });

  it("assignEdgeWeights should return [2,1,4] for edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]", () => {
    const edges = [
      [1, 2],
      [1, 3],
      [3, 4],
      [3, 5],
    ];
    const queries = [
      [1, 4],
      [3, 4],
      [2, 5],
    ];
    const result = assignEdgeWeights(edges, queries);
    expect(result).toEqual([2, 1, 4]);
  });
});
