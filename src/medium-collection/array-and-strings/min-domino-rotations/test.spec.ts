import { minDominoRotations } from "./solution";

describe("Minimum Domino Rotations For Equal Row", () => {
  it("minDominoRotations should return 2 for tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]", () => {
    const tops = [2, 1, 2, 4, 2, 2];
    const bottoms = [5, 2, 6, 2, 3, 2];
    const result = minDominoRotations(tops, bottoms);
    expect(result).toEqual(2);
  });

  it("minDominoRotations should return -1 for tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]", () => {
    const tops = [3, 5, 1, 2, 3];
    const bottoms = [3, 6, 3, 3, 4];
    const result = minDominoRotations(tops, bottoms);
    expect(result).toEqual(-1);
  });

  it("minDominoRotations should return 1 for tops = [1,2,1,1,1,2,2,2], bottoms = [2,1,2,2,2,2,2,2]", () => {
    const tops = [1, 2, 1, 1, 1, 2, 2, 2];
    const bottoms = [2, 1, 2, 2, 2, 2, 2, 2];
    const result = minDominoRotations(tops, bottoms);
    expect(result).toEqual(1);
  });

  it("minDominoRotations should return 1 for tops = [2,1,2,2,2,2,2,2], bottoms = [1,2,1,1,1,2,2,2]", () => {
    const tops = [2, 1, 2, 2, 2, 2, 2, 2];
    const bottoms = [1, 2, 1, 1, 1, 2, 2, 2];
    const result = minDominoRotations(tops, bottoms);
    expect(result).toEqual(1);
  });

  it("minDominoRotations should return 1 for tops = [1,4,1,6,6,1,6,2], bottoms = [2,2,5,3,1,5,6,6]", () => {
    const tops = [1, 4, 1, 6, 6, 1, 6, 2];
    const bottoms = [2, 2, 5, 3, 1, 5, 6, 6];
    const result = minDominoRotations(tops, bottoms);
    expect(result).toEqual(-1);
  });
});
