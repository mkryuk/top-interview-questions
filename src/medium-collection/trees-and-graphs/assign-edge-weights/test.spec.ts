import { assignEdgeWeights } from "./solution";

describe("3558. Number of Ways to Assign Edge Weights I:", () => {
  it("should return 1 for edges = [[1,2]]", () => {
    const edges = [[1, 2]];
    const result = assignEdgeWeights(edges);
    expect(result).toBe(1);
  });

  it("should return 2 for edges = [[1,2],[1,3],[3,4],[3,5]]", () => {
    const edges = [
      [1, 2],
      [1, 3],
      [3, 4],
      [3, 5],
    ];
    const result = assignEdgeWeights(edges);
    expect(result).toBe(2);
  });
});
