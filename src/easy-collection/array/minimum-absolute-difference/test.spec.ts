import { minimumAbsDifference } from "./solution";

describe("Minimum Absolute Difference:", () => {
  it("minimumAbsDifference should return [[1,2],[2,3],[3,4]] for arr = [4,2,1,3]", () => {
    const arr = [4, 2, 1, 3];
    const result = minimumAbsDifference(arr);
    expect(result).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });

  it("minimumAbsDifference should return [[1,3]] for arr = [1,3,6,10,15]", () => {
    const arr = [1, 3, 6, 10, 15];
    const result = minimumAbsDifference(arr);
    expect(result).toEqual([[1, 3]]);
  });

  it("minimumAbsDifference should return [[-14,-10],[19,23],[23,27]] for arr = [3,8,-10,23,19,-4,-14,27]", () => {
    const arr = [3, 8, -10, 23, 19, -4, -14, 27];
    const result = minimumAbsDifference(arr);
    expect(result).toEqual([
      [-14, -10],
      [19, 23],
      [23, 27],
    ]);
  });
});
