import { firstCompleteIndex } from "./solution";

describe("First Completely Painted Row or Column", () => {
  it("firstCompleteIndex should return 2 for arr = [1,3,4,2], mat = [[1,4],[2,3]]", () => {
    const arr = [1, 3, 4, 2];
    const mat = [
      [1, 4],
      [2, 3],
    ];
    const result = firstCompleteIndex(arr, mat);
    expect(result).toEqual(2);
  });

  it("firstCompleteIndex should return 3 for arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]", () => {
    const arr = [2, 8, 7, 4, 1, 3, 5, 6, 9];
    const mat = [
      [3, 2, 5],
      [1, 4, 6],
      [8, 7, 9],
    ];
    const result = firstCompleteIndex(arr, mat);
    expect(result).toEqual(3);
  });

  it("firstCompleteIndex should return 1 for arr = [1,4,5,2,6,3], mat = [[4,3,5],[1,2,6]]", () => {
    const arr = [1, 4, 5, 2, 6, 3];
    const mat = [
      [4, 3, 5],
      [1, 2, 6],
    ];
    const result = firstCompleteIndex(arr, mat);
    expect(result).toEqual(1);
  });
});
