import { productQueries } from "./solution";

describe("2438. Range Product Queries of Powers", () => {
  it("productQueries should return [2,4,64] for n = 15, queries = [[0,1],[2,2],[0,3]]", () => {
    const n = 15;
    const queries = [
      [0, 1],
      [2, 2],
      [0, 3],
    ];
    const result = productQueries(n, queries);
    expect(result).toEqual([2, 4, 64]);
  });

  it("productQueries should return [2] for n = 2, queries = [[0,0]]", () => {
    const n = 2;
    const queries = [[0, 0]];
    const result = productQueries(n, queries);
    expect(result).toEqual([2]);
  });
});
