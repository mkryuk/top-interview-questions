import { modifiedGraphEdges } from "./solution";

describe("Modify Graph Edge Weights", () => {
  it("modifiedGraphEdges should return [[4,1,1],[2,0,1],[0,3,3],[4,3,1]] for n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5", () => {
    const n = 5;
    const edges = [
      [4, 1, -1],
      [2, 0, -1],
      [0, 3, -1],
      [4, 3, -1],
    ];
    const source = 0;
    const destination = 1;
    const target = 5;
    const result = modifiedGraphEdges(n, edges, source, destination, target);
    expect(result).toEqual([
      [4, 1, 1],
      [2, 0, 3],
      [0, 3, 3],
      [4, 3, 1],
    ]);
  });

  it("modifiedGraphEdges should return [] for n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6", () => {
    const n = 3;
    const edges = [
      [0, 1, -1],
      [0, 2, 5],
    ];
    const source = 0;
    const destination = 2;
    const target = 6;
    const result = modifiedGraphEdges(n, edges, source, destination, target);
    expect(result).toEqual([]);
  });

  it("modifiedGraphEdges should return [[1,0,4],[1,2,3],[2,3,5],[0,3,1]] for n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6", () => {
    const n = 4;
    const edges = [
      [1, 0, 4],
      [1, 2, 3],
      [2, 3, 5],
      [0, 3, -1],
    ];
    const source = 0;
    const destination = 2;
    const target = 6;
    const result = modifiedGraphEdges(n, edges, source, destination, target);
    expect(result).toEqual([
      [1, 0, 4],
      [1, 2, 3],
      [2, 3, 5],
      [0, 3, 1],
    ]);
  });
});
