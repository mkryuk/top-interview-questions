import { maxSideLength } from "./solution";

describe("1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold", () => {
  it("maxSideLength should return 2 for mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4", () => {
    const mat = [
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
    ];
    const threshold = 4;
    const result = maxSideLength(mat, threshold);
    expect(result).toEqual(2);
  });

  it("maxSideLength should return 0 for mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1", () => {
    const mat = [
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
    ];
    const threshold = 1;
    const result = maxSideLength(mat, threshold);
    expect(result).toEqual(0);
  });
});
