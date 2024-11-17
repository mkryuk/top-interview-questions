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
});
