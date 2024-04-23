import { findMinHeightTrees } from "./solution";

describe("Minimum Height Trees", () => {
  it("findMinHeightTrees should return [1] for n = 4, edges = [[1,0],[1,2],[1,3]]", () => {
    const n = 4;
    const edges = [
      [1, 0],
      [1, 2],
      [1, 3],
    ];
    const result = findMinHeightTrees(n, edges);
    expect(result).toEqual([1]);
  });

  it("findMinHeightTrees should return [3,4] for n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]", () => {
    const n = 6;
    const edges = [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 4],
      [5, 4],
    ];
    const result = findMinHeightTrees(n, edges);
    expect(result).toEqual([3, 4]);
  });
});
