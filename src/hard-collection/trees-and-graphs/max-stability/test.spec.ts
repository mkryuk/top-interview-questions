import { maxStability } from "./solution";

describe("Maximize Spanning Tree Stability with Upgrades", () => {
  it("maxStability should return 2 for n = 3, edges = [[0,1,2,1],[1,2,3,0]], k = 1", () => {
    const n = 3;
    const edges = [
      [0, 1, 2, 1],
      [1, 2, 3, 0],
    ];
    const k = 1;
    const result = maxStability(n, edges, k);
    expect(result).toBe(2);
  });

  it("maxStability should return 6 for n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2", () => {
    const n = 3;
    const edges = [
      [0, 1, 4, 0],
      [1, 2, 3, 0],
      [0, 2, 1, 0],
    ];
    const k = 2;
    const result = maxStability(n, edges, k);
    expect(result).toBe(6);
  });

  it("maxStability should return -1 for n = 3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k = 0", () => {
    const n = 3;
    const edges = [
      [0, 1, 1, 1],
      [1, 2, 1, 1],
      [2, 0, 1, 1],
    ];
    const k = 0;
    const result = maxStability(n, edges, k);
    expect(result).toBe(-1);
  });
});
