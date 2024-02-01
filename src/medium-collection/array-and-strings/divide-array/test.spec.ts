import { divideArray } from "./solution";

describe("Divide Array Into Arrays With Max Difference:", () => {
  it("divideArray should return [[1,1,3],[3,4,5],[7,8,9]] for nums = [1,3,4,8,7,9,3,5,1], k = 2", () => {
    const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
    const k = 2;
    const result = divideArray(nums, k);
    expect(result).toEqual([
      [1, 1, 3],
      [3, 4, 5],
      [7, 8, 9],
    ]);
  });

  it("divideArray should return [] for nums = [1,3,3,2,7,3], k = 3", () => {
    const nums = [1, 3, 3, 2, 7, 3];
    const k = 3;
    const result = divideArray(nums, k);
    expect(result).toEqual([]);
  });
});
