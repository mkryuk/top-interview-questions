import { processQueries } from "./solution";

describe("3607. Power Grid Maintenance", () => {
  it("processQueries should return [3,2,3] for c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]", () => {
    const c = 5;
    const connections = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    const queries = [
      [1, 3],
      [2, 1],
      [1, 1],
      [2, 2],
      [1, 2],
    ];
    const result = processQueries(c, connections, queries);
    expect(result).toEqual([3, 2, 3]);
  });

  it("processQueries should return [1,-1] for c = 3, connections = [], queries = [[1,1],[2,1],[1,1]]", () => {
    const c = 3;
    const connections: number[][] = [];
    const queries = [
      [1, 1],
      [2, 1],
      [1, 1],
    ];
    const result = processQueries(c, connections, queries);
    expect(result).toEqual([1, -1]);
  });
});
