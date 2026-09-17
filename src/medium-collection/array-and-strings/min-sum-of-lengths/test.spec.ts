import { minSumOfLengths } from "./solution";

describe("1477. Find Two Non-overlapping Sub-arrays Each With Target Sum:", () => {
  it("minSumOfLengths should return 2 for arr = [3,2,2,4,3], target = 3", () => {
    const arr = [3, 2, 2, 4, 3];
    const target = 3;
    const result = minSumOfLengths(arr, target);
    expect(result).toEqual(2);
  });

  it("minSumOfLengths should return 2 for arr = [7,3,4,7], target = 7", () => {
    const arr = [7, 3, 4, 7];
    const target = 7;
    const result = minSumOfLengths(arr, target);
    expect(result).toEqual(2);
  });

  it("minSumOfLengths should return -1 for arr = [4,3,2,6,2,3,4], target = 6", () => {
    const arr = [4, 3, 2, 6, 2, 3, 4];
    const target = 6;
    const result = minSumOfLengths(arr, target);
    expect(result).toEqual(-1);
  });
});
