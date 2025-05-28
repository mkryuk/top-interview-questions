import { maxTargetNodes } from "./solution";

describe("Maximize the Number of Target Nodes After Connecting Trees I", () => {
  it("maxTargetNodes should return [9,7,9,8,8] for edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]], k = 2", () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ];
    const edges2 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 7],
      [1, 4],
      [4, 5],
      [4, 6],
    ];
    const k = 2;
    const result = maxTargetNodes(edges1, edges2, k);
    expect(result).toEqual([9, 7, 9, 8, 8]);
  });

  it("maxTargetNodes should return [6,3,3,3,3] for edges1 = [[0,1],[0,2],[0,3],[0,4]], edges2 = [[0,1],[1,2],[2,3]], k = 1", () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ];
    const edges2 = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    const k = 1;
    const result = maxTargetNodes(edges1, edges2, k);
    expect(result).toEqual([6, 3, 3, 3, 3]);
  });
});
