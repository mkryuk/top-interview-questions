import { restoreArray } from "./solution";

describe("Restore the Array From Adjacent Pairs:", () => {
  it("restoreArray should return [1,2,3,4] for adjacentPairs = [[2,1],[3,4],[3,2]]", () => {
    const adjacentPairs = [
      [2, 1],
      [3, 4],
      [3, 2],
    ];
    const result = restoreArray(adjacentPairs);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("restoreArray should return [-2,4,1,-3] for adjacentPairs = [[4,-2],[1,4],[-3,1]]", () => {
    const adjacentPairs = [
      [4, -2],
      [1, 4],
      [-3, 1],
    ];
    const result = restoreArray(adjacentPairs);
    expect(result).toEqual([-2, 4, 1, -3]);
  });

  it("restoreArray should return [100000,-100000] for adjacentPairs = [[100000,-100000]]", () => {
    const adjacentPairs = [[100000, -100000]];
    const result = restoreArray(adjacentPairs);
    expect(result).toEqual([100000, -100000]);
  });
});
