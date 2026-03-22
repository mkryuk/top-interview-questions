import { findRotation } from "./solution";

describe("Determine Whether Matrix Can Be Obtained By Rotation", () => {
  it("findRotation should return true for mat = [[0,1],[1,0]], target = [[1,0],[0,1]]", () => {
    const mat = [
      [0, 1],
      [1, 0],
    ];
    const target = [
      [1, 0],
      [0, 1],
    ];
    const result = findRotation(mat, target);
    expect(result).toBeTrue();
  });

  it("findRotation should return false for mat = [[0,1],[1,1]], target = [[1,0],[0,1]]", () => {
    const mat = [
      [0, 1],
      [1, 1],
    ];
    const target = [
      [1, 0],
      [0, 1],
    ];
    const result = findRotation(mat, target);
    expect(result).toBeFalse();
  });

  it("findRotation should return true for mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]", () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ];
    const target = [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const result = findRotation(mat, target);
    expect(result).toBeTrue();
  });
});
