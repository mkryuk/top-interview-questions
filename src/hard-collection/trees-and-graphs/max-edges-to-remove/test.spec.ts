import { maxNumEdgesToRemove } from "./solution";

describe("Remove Max Number of Edges to Keep Graph Fully Traversable", () => {
  it("maxNumEdgesToRemove should return 2 for n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]", () => {
    const n = 4;
    const edges = [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 3],
      [1, 2, 4],
      [1, 1, 2],
      [2, 3, 4],
    ];
    const result = maxNumEdgesToRemove(n, edges);
    expect(result).toEqual(2);
  });

  it("maxNumEdgesToRemove should return 0 for n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]", () => {
    const n = 4;
    const edges = [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 4],
      [2, 1, 4],
    ];
    const result = maxNumEdgesToRemove(n, edges);
    expect(result).toEqual(0);
  });

  it("maxNumEdgesToRemove should return -1 for n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]", () => {
    const n = 4;
    const edges = [
      [3, 2, 3],
      [1, 1, 2],
      [2, 3, 4],
    ];
    const result = maxNumEdgesToRemove(n, edges);
    expect(result).toEqual(-1);
  });
});
