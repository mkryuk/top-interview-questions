import { largestSubmatrix } from "./solution";

describe("Largest Submatrix With Rearrangements:", () => {
  it("largestSubmatrix should return 4 for matrix = [[0,0,1],[1,1,1],[1,0,1]]", () => {
    const matrix = [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
    ];
    const result = largestSubmatrix(matrix);
    expect(result).toEqual(4);
  });

  it("largestSubmatrix should return 3 for matrix = [[1,0,1,0,1]]", () => {
    const matrix = [[1, 0, 1, 0, 1]];
    const result = largestSubmatrix(matrix);
    expect(result).toEqual(3);
  });

  it("largestSubmatrix should return 2 for matrix = [[1,1,0],[1,0,1]]", () => {
    const matrix = [
      [1, 1, 0],
      [1, 0, 1],
    ];
    const result = largestSubmatrix(matrix);
    expect(result).toEqual(2);
  });
});
