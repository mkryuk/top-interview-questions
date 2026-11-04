import { minOperations } from "./solution";

describe("3505. Minimum Operations to Make Elements Within K Subarrays Equal:", () => {
  it("minOperations should return 8 for nums = [5,-2,1,3,7,3,6,4,-1], x = 3, k = 2", () => {
    const nums = [5, -2, 1, 3, 7, 3, 6, 4, -1];
    const x = 3;
    const k = 2;
    const result = minOperations(nums, x, k);
    expect(result).toEqual(8);
  });

  it("minOperations should return 3 for nums = [9,-2,-2,-2,1,5], x = 2, k = 2", () => {
    const nums = [9, -2, -2, -2, 1, 5];
    const x = 2;
    const k = 2;
    const result = minOperations(nums, x, k);
    expect(result).toEqual(3);
  });
});
