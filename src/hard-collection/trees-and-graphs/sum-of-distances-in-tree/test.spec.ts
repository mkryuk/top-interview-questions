import { sumOfDistancesInTree } from "./solution";

describe("Sum of Distances in Tree", () => {
  it("sumOfDistancesInTree should return [8,12,6,10,10,10] for n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]", () => {
    const n = 6;
    const edges = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ];
    const result = sumOfDistancesInTree(n, edges);
    expect(result).toEqual([8, 12, 6, 10, 10, 10]);
  });

  it("sumOfDistancesInTree should return [0] for n = 1, edges = []", () => {
    const n = 1;
    const edges: number[][] = [];
    const result = sumOfDistancesInTree(n, edges);
    expect(result).toEqual([0]);
  });

  it("sumOfDistancesInTree should return [1,1] for n = 2, edges = [[1,0]]", () => {
    const n = 2;
    const edges = [[1, 0]];
    const result = sumOfDistancesInTree(n, edges);
    expect(result).toEqual([1, 1]);
  });
});
