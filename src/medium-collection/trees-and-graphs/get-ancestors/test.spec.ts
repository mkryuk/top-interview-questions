import { getAncestors } from "./solution";

describe("All Ancestors of a Node in a Directed Acyclic Graph", () => {
  it("getAncestors should return [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]] for n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]", () => {
    const n = 8;
    const edgeList = [
      [0, 3],
      [0, 4],
      [1, 3],
      [2, 4],
      [2, 7],
      [3, 5],
      [3, 6],
      [3, 7],
      [4, 6],
    ];
    const result = getAncestors(n, edgeList);
    expect(result).toEqual([
      [],
      [],
      [],
      [0, 1],
      [0, 2],
      [0, 1, 3],
      [0, 1, 2, 3, 4],
      [0, 1, 2, 3],
    ]);
  });

  it("getAncestors should return [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]] for n = 5, edgeList = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]", () => {
    const n = 5;
    const edgeList = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];
    const result = getAncestors(n, edgeList);
    expect(result).toEqual([[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]]);
  });
});
