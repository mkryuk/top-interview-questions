import { rangeSum } from "./solution";

describe("Range Sum of Sorted Subarray Sums", () => {
  it("rangeSum should return 13 for nums = [1,2,3,4], n = 4, left = 1, right = 5", () => {
    const nums = [1, 2, 3, 4];
    const n = 4;
    const left = 1;
    const right = 5;
    const result = rangeSum(nums, n, left, right);
    expect(result).toEqual(13);
  });

  it("rangeSum should return 6 for nums = [1,2,3,4], n = 4, left = 3, right = 4", () => {
    const nums = [1, 2, 3, 4];
    const n = 4;
    const left = 3;
    const right = 4;
    const result = rangeSum(nums, n, left, right);
    expect(result).toEqual(6);
  });

  it("rangeSum should return 50 for nums = [1,2,3,4], n = 4, left = 1, right = 10", () => {
    const nums = [1, 2, 3, 4];
    const n = 4;
    const left = 1;
    const right = 10;
    const result = rangeSum(nums, n, left, right);
    expect(result).toEqual(50);
  });
});
