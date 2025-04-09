import { minOperations } from "./solution";

describe("Minimum Operations to Make Array Values Equal to K", () => {
  it("minOperations should return 2 for nums = [5,2,5,4,5], k = 2", () => {
    const nums = [5, 2, 5, 4, 5];
    const k = 2;
    const result = minOperations(nums, k);
    expect(result).toEqual(2);
  });

  it("minOperations should return -1 for nums = [2,1,2], k = 2", () => {
    const nums = [2, 1, 2];
    const k = 2;
    const result = minOperations(nums, k);
    expect(result).toEqual(-1);
  });

  it("minOperations should return 4 for nums = [9,7,5,3], k = 1", () => {
    const nums = [9, 7, 5, 3];
    const k = 1;
    const result = minOperations(nums, k);
    expect(result).toEqual(4);
  });
});
