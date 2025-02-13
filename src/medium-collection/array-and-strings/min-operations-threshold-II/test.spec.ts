import { minOperations } from "./solution";

describe("Minimum Operations to Exceed Threshold Value II", () => {
  it("minOperations should return 2 for nums = [2,11,10,1,3], k = 10", () => {
    const nums = [2, 11, 10, 1, 3];
    const k = 10;
    const result = minOperations(nums, k);
    expect(result).toEqual(2);
  });

  it("minOperations should return 4 for nums = [1,1,2,4,9], k = 20", () => {
    const nums = [1, 1, 2, 4, 9];
    const k = 20;
    const result = minOperations(nums, k);
    expect(result).toEqual(4);
  });
});
