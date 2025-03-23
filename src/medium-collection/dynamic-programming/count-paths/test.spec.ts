import { countPaths } from "./solution";

describe("Number of Ways to Arrive at Destination", () => {
  it("countPaths should return 4 for n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]", () => {
    const n = 7;
    const roads = [
      [0, 6, 7],
      [0, 1, 2],
      [1, 2, 3],
      [1, 3, 3],
      [6, 3, 3],
      [3, 5, 1],
      [6, 5, 1],
      [2, 5, 1],
      [0, 4, 5],
      [4, 6, 2],
    ];
    const result = countPaths(n, roads);
    expect(result).toEqual(4);
  });

  it("countPaths should return 1 for n = 2, roads = [[1,0,10]]", () => {
    const n = 2;
    const roads = [[1, 0, 10]];
    const result = countPaths(n, roads);
    expect(result).toEqual(1);
  });
});
