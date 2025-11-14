import { rangeAddQueries } from "./solution";

describe("2536. Increment Submatrices by One", () => {
  it("rangeAddQueries should return [[1,1,0],[1,2,1],[0,1,1]] for n = 3, queries = [[1,1,2,2],[0,0,1,1]]", () => {
    const n = 3;
    const queries = [
      [1, 1, 2, 2],
      [0, 0, 1, 1],
    ];
    const result = rangeAddQueries(n, queries);
    expect(result).toEqual([
      [1, 1, 0],
      [1, 2, 1],
      [0, 1, 1],
    ]);
  });

  it("rangeAddQueries should return [[1,1],[1,1]] for n = 2, queries = [[0,0,1,1]]", () => {
    const n = 2;
    const queries = [[0, 0, 1, 1]];
    const result = rangeAddQueries(n, queries);
    expect(result).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });
});
