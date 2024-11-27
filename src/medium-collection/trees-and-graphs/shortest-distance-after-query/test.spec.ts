import { shortestDistanceAfterQueries } from "./solution";

describe("Shortest Distance After Road Addition Queries I", () => {
  it("shortestDistanceAfterQueries should return [3,2,1] for n = 5, queries = [[2,4],[0,2],[0,4]]", () => {
    const n = 5;
    const queries = [
      [2, 4],
      [0, 2],
      [0, 4],
    ];
    const result = shortestDistanceAfterQueries(n, queries);
    expect(result).toEqual([3, 2, 1]);
  });

  it("shortestDistanceAfterQueries should return [1,1] for n = 4, queries = [[0,3],[0,2]]", () => {
    const n = 4;
    const queries = [
      [0, 3],
      [0, 2],
    ];
    const result = shortestDistanceAfterQueries(n, queries);
    expect(result).toEqual([1, 1]);
  });

  it("shortestDistanceAfterQueries should return [3,3] for n = 6, queries = [[1,4],[0,2]]", () => {
    const n = 6;
    const queries = [
      [1, 4],
      [0, 2],
    ];
    const result = shortestDistanceAfterQueries(n, queries);
    expect(result).toEqual([3, 3]);
  });
});
