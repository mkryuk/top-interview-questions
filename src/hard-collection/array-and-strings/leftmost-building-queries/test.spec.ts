import { leftmostBuildingQueries } from "./solution";

describe("Find Building Where Alice and Bob Can Meet", () => {
  it("leftmostBuildingQueries should return [2,5,-1,5,2] for heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]", () => {
    const heights = [6, 4, 8, 5, 2, 7];
    const queries = [
      [0, 1],
      [0, 3],
      [2, 4],
      [3, 4],
      [2, 2],
    ];
    const result = leftmostBuildingQueries(heights, queries);
    expect(result).toEqual([2, 5, -1, 5, 2]);
  });

  it("leftmostBuildingQueries should return [7,6,-1,4,6] for heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]", () => {
    const heights = [5, 3, 8, 2, 6, 1, 4, 6];
    const queries = [
      [0, 7],
      [3, 5],
      [5, 2],
      [3, 0],
      [1, 6],
    ];
    const result = leftmostBuildingQueries(heights, queries);
    expect(result).toEqual([7, 6, -1, 4, 6]);
  });
});
