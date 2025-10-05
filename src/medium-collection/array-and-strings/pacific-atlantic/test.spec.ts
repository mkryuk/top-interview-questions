import { pacificAtlantic } from "./solution";

describe("417. Pacific Atlantic Water Flow", () => {
  it("pacificAtlantic should return [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]] for heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]", () => {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ];
    const result = pacificAtlantic(heights);
    expect(result).toEqual([
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ]);
  });

  it("pacificAtlantic should return [[0,0]] for heights = [[1]]", () => {
    const heights = [[1]];
    const result = pacificAtlantic(heights);
    expect(result).toEqual([[0, 0]]);
  });
});
