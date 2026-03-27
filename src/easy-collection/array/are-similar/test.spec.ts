import { areSimilar } from "./solution";

describe("2946. Matrix Similarity After Cyclic Shifts", () => {
  it("areSimilar should return false for mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const k = 4;
    const result = areSimilar(mat, k);
    expect(result).toBeFalse();
  });

  it("areSimilar should return true for mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2", () => {
    const mat = [
      [1, 2, 1, 2],
      [5, 5, 5, 5],
      [6, 3, 6, 3],
    ];
    const k = 2;
    const result = areSimilar(mat, k);
    expect(result).toBeTrue();
  });

  it("areSimilar should return true for mat = [[2,2],[2,2]], k = 3", () => {
    const mat = [
      [2, 2],
      [2, 2],
    ];
    const k = 3;
    const result = areSimilar(mat, k);
    expect(result).toBeTrue();
  });
});
