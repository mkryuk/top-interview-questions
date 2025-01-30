import { magnificentSets } from "./solution";

describe("Divide Nodes Into the Maximum Number of Groups", () => {
  it("magnificentSets should return 4 for n = 6, edges = [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]", () => {
    const n = 6;
    const edges = [
      [1, 2],
      [1, 4],
      [1, 5],
      [2, 6],
      [2, 3],
      [4, 6],
    ];
    const result = magnificentSets(n, edges);
    expect(result).toEqual(4);
  });

  it("magnificentSets should return -1 for n = 3, edges = [[1,2],[2,3],[3,1]]", () => {
    const n = 3;
    const edges = [
      [1, 2],
      [2, 3],
      [3, 1],
    ];
    const result = magnificentSets(n, edges);
    expect(result).toEqual(-1);
  });
});
