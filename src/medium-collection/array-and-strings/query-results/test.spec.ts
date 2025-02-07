import { queryResults } from "./solution";

describe("Find the Number of Distinct Colors Among the Balls", () => {
  it("queryResults should return [1,2,2,3] for limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]", () => {
    const limit = 4;
    const queries = [
      [1, 4],
      [2, 5],
      [1, 3],
      [3, 4],
    ];
    const result = queryResults(limit, queries);
    expect(result).toEqual([1, 2, 2, 3]);
  });

  it("queryResults should return [1,2,2,3,4] for limit = 4, queries = [[0,1],[1,2],[2,2],[3,4],[4,5]]", () => {
    const limit = 4;
    const queries = [
      [0, 1],
      [1, 2],
      [2, 2],
      [3, 4],
      [4, 5],
    ];
    const result = queryResults(limit, queries);
    expect(result).toEqual([1, 2, 2, 3, 4]);
  });

  it("queryResults should return [1,1,1,1,2] for limit = 1, queries = [[0,1],[0,4],[0,4],[0,1],[1,2]]", () => {
    const limit = 1;
    const queries = [
      [0, 1],
      [0, 4],
      [0, 4],
      [0, 1],
      [1, 2],
    ];
    const result = queryResults(limit, queries);
    expect(result).toEqual([1, 1, 1, 1, 2]);
  });
});
