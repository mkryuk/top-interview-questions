import { construct2DArray } from "./solution-oneliner";

describe("Convert 1D Array Into 2D Array", () => {
  it("construct2DArray should return [[1,2],[3,4]] for original = [1,2,3,4], m = 2, n = 2", () => {
    const original = [1, 2, 3, 4];
    const m = 2;
    const n = 2;
    const result = construct2DArray(original, m, n);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("construct2DArray should return [[1,2,3]] for original = [1,2,3], m = 1, n = 3", () => {
    const original = [1, 2, 3];
    const m = 1;
    const n = 3;
    const result = construct2DArray(original, m, n);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it("construct2DArray should return [] for original = [1,2], m = 1, n = 1", () => {
    const original = [1, 2];
    const m = 1;
    const n = 1;
    const result = construct2DArray(original, m, n);
    expect(result).toEqual([]);
  });

  it("construct2DArray should return [[1],[1],[1],[1]] for original = [1,1,1,1], m = 4, n = 1", () => {
    const original = [1, 1, 1, 1];
    const m = 4;
    const n = 1;
    const result = construct2DArray(original, m, n);
    expect(result).toEqual([[1], [1], [1], [1]]);
  });
});
