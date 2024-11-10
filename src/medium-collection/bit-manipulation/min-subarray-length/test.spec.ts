import { minimumSubarrayLength } from "./solution";

describe("Shortest Subarray With OR at Least K II", () => {
  it("minimumSubarrayLength should return 1 for nums = [1,2,3], k = 2", () => {
    const nums = [1, 2, 3];
    const k = 2;
    const result = minimumSubarrayLength(nums, k);
    expect(result).toEqual(1);
  });

  it("minimumSubarrayLength should return 3 for nums = [2,1,8], k = 10", () => {
    const nums = [2, 1, 8];
    const k = 10;
    const result = minimumSubarrayLength(nums, k);
    expect(result).toEqual(3);
  });

  it("minimumSubarrayLength should return 1 for nums = [1,2], k = 0", () => {
    const nums = [1, 2];
    const k = 0;
    const result = minimumSubarrayLength(nums, k);
    expect(result).toEqual(1);
  });
});
