import { shortestSubarray } from "./solution";

describe("Shortest Subarray with Sum at Least K", () => {
  it("shortestSubarray should return 1 for nums = [1], k = 1", () => {
    const nums = [1];
    const k = 1;
    const result = shortestSubarray(nums, k);
    expect(result).toEqual(1);
  });

  it("shortestSubarray should return -1 for nums = [1,2], k = 4", () => {
    const nums = [1, 2];
    const k = 4;
    const result = shortestSubarray(nums, k);
    expect(result).toEqual(-1);
  });

  it("shortestSubarray should return 3 for nums = [2,-1,2], k = 3", () => {
    const nums = [2, -1, 2];
    const k = 3;
    const result = shortestSubarray(nums, k);
    expect(result).toEqual(3);
  });

  it("shortestSubarray should return 2 for nums = [48,99,37,4,-31], k = 140", () => {
    const nums = [48, 99, 37, 4, -31];
    const k = 140;
    const result = shortestSubarray(nums, k);
    expect(result).toEqual(2);
  });

  it("shortestSubarray should return 2 for nums = [56,-21,56,35,-9], k = 61", () => {
    const nums = [56, -21, 56, 35, -9];
    const k = 61;
    const result = shortestSubarray(nums, k);
    expect(result).toEqual(2);
  });
});
