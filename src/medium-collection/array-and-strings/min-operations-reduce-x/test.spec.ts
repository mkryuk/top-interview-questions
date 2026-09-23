import { minOperations } from "./solution";

describe("1658. Minimum Operations to Reduce X to Zero:", () => {
  it("minOperations should return 2 for nums = [1,1,4,2,3], x = 5", () => {
    const nums = [1, 1, 4, 2, 3];
    const x = 5;
    const result = minOperations(nums, x);
    expect(result).toEqual(2);
  });

  it("minOperations should return -1 for nums = [5,6,7,8,9], x = 4", () => {
    const nums = [5, 6, 7, 8, 9];
    const x = 4;
    const result = minOperations(nums, x);
    expect(result).toEqual(-1);
  });

  it("minOperations should return 5 for nums = [3,2,20,1,1,3], x = 10", () => {
    const nums = [3, 2, 20, 1, 1, 3];
    const x = 10;
    const result = minOperations(nums, x);
    expect(result).toEqual(5);
  });
});
