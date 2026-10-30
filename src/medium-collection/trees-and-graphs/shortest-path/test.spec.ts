import { shortestPath } from "./solution";

describe("3970. Shortest Path With At Most K Consecutive Identical Characters:", () => {
  it('shortestPath should return 3 for n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 1', () => {
    const n = 3;
    const edges = [
      [0, 1, 1],
      [1, 2, 1],
      [0, 2, 3],
    ];
    const labels = "aab";
    const k = 1;
    const result = shortestPath(n, edges, labels, k);
    expect(result).toEqual(3);
  });

  it('shortestPath should return 2 for n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 2', () => {
    const n = 3;
    const edges = [
      [0, 1, 1],
      [1, 2, 1],
      [0, 2, 3],
    ];
    const labels = "aab";
    const k = 2;
    const result = shortestPath(n, edges, labels, k);
    expect(result).toEqual(2);
  });

  it('shortestPath should return -1 for n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2', () => {
    const n = 3;
    const edges = [
      [0, 1, 1],
      [1, 2, 1],
    ];
    const labels = "aaa";
    const k = 2;
    const result = shortestPath(n, edges, labels, k);
    expect(result).toEqual(-1);
  });
});
