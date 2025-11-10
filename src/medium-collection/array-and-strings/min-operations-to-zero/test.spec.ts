import { minOperations } from "./solution";

describe("3542. Minimum Operations to Convert All Elements to Zero", () => {
  it("minOperations should return 1 for nums = [0,2]", () => {
    const nums = [0, 2];
    const result = minOperations(nums);
    expect(result).toEqual(1);
  });

  it("minOperations should return 3 for nums = [3,1,2,1]", () => {
    const nums = [0, 2];
    const result = minOperations(nums);
    expect(result).toEqual(3);
  });

  it("minOperations should return 4 for nums = [1,2,1,2,1,2]", () => {
    const nums = [1, 2, 1, 2, 1, 2];
    const result = minOperations(nums);
    expect(result).toEqual(4);
  });
});
