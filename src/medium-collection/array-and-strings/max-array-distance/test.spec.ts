import { maxDistance } from "./solution";

describe("Maximum Distance in Arrays", () => {
  it("maxDistance should return 4 for arrays = [[1,2,3],[4,5],[1,2,3]]", () => {
    const arrays = [
      [1, 2, 3],
      [4, 5],
      [1, 2, 3],
    ];
    const result = maxDistance(arrays);
    expect(result).toEqual(4);
  });

  it("maxDistance should return 0 for arrays = [[1],[1]]", () => {
    const arrays = [[1], [1]];
    const result = maxDistance(arrays);
    expect(result).toEqual(0);
  });
});
