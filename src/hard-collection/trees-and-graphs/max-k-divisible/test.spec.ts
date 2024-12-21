import { maxKDivisibleComponents } from "./solution";

describe("Maximum Number of K-Divisible Components", () => {
  it("maxKDivisibleComponents should return 2 for n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6", () => {
    const n = 5;
    const edges = [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 4],
    ];
    const values = [1, 8, 1, 4, 4];
    const k = 6;
    const result = maxKDivisibleComponents(n, edges, values, k);
    expect(result).toEqual(2);
  });

  it("maxKDivisibleComponents should return 3 for n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3", () => {
    const n = 7;
    const edges = [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
    ];
    const values = [3, 0, 6, 1, 5, 2, 1];
    const k = 3;
    const result = maxKDivisibleComponents(n, edges, values, k);
    expect(result).toEqual(3);
  });
});
