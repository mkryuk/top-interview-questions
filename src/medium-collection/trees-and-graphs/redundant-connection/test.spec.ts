import { findRedundantConnection } from "./solution";

describe("Redundant Connection", () => {
  it("findRedundantConnection should return [2,3] for edges = [[1,2],[1,3],[2,3]]", () => {
    const edges = [
      [1, 2],
      [1, 3],
      [2, 3],
    ];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([2, 3]);
  });

  it("findRedundantConnection should return [1,4] for edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]", () => {
    const edges = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 4],
      [1, 5],
    ];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([1, 4]);
  });
});
