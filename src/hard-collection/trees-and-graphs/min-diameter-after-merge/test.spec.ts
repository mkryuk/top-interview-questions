import { minimumDiameterAfterMerge } from "./solution";

describe("Find Minimum Diameter After Merging Two Trees", () => {
  it("minimumDiameterAfterMerge should return 3 for edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]", () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    const edges2 = [[0, 1]];
    const result = minimumDiameterAfterMerge(edges1, edges2);
    expect(result).toEqual(3);
  });

  it("minimumDiameterAfterMerge should return 5 for edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]", () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [2, 7],
    ];
    const edges2 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [2, 7],
    ];
    const result = minimumDiameterAfterMerge(edges1, edges2);
    expect(result).toEqual(5);
  });

  it("minimumDiameterAfterMerge should return 2 for edges1 = [], edges2 = [[0,1]]", () => {
    const edges1: number[][] = [];
    const edges2 = [[0, 1]];
    const result = minimumDiameterAfterMerge(edges1, edges2);
    expect(result).toEqual(2);
  });
});
