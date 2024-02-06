import { findMissingAndRepeatedValues } from "./solution";

describe("Find Missing and Repeated Values:", () => {
  it("findMissingAndRepeatedValues should return [2,4] for grid = [[1,3],[2,2]]", () => {
    const grid = [
      [1, 3],
      [2, 2],
    ];
    const result = findMissingAndRepeatedValues(grid);
    expect(result).toEqual([2, 4]);
  });

  it("findMissingAndRepeatedValues should return [9,5] for grid = [[9,1,7],[8,9,2],[3,4,6]]", () => {
    const grid = [
      [9, 1, 7],
      [8, 9, 2],
      [3, 4, 6],
    ];
    const result = findMissingAndRepeatedValues(grid);
    expect(result).toEqual([9, 5]);
  });
});
