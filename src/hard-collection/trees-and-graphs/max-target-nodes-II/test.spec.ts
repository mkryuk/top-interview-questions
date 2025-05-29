import { maxTargetNodes } from "./solution";

describe("3373. Maximize the Number of Target Nodes After Connecting Trees II", () => {
  it("maxTargetNodes should return [8,7,7,8,8] for edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]", () => {
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
    const result = maxTargetNodes(edges1, edges2);
    expect(result).toEqual([8, 7, 7, 8, 8]);
  });

  it("maxTargetNodes should return [3,6,6,6,6] for edges1 = [[0,1],[0,2],[0,3],[0,4]], edges2 = [[0,1],[1,2],[2,3]]", () => {
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
    const result = maxTargetNodes(edges1, edges2);
    expect(result).toEqual([3, 6, 6, 6, 6]);
  });
});
