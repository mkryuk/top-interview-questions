import { minOperations } from "./solution";

describe("3942. Minimum Operations to Sort a Permutation:", () => {
  it("minOperations should return 2 for nums = [0,2,1]", () => {
    const nums = [0, 2, 1];
    const result = minOperations(nums);
    expect(result).toEqual(2);
  });

  it("minOperations should return 2 for nums = [1,0,2]", () => {
    const nums = [1, 0, 2];
    const result = minOperations(nums);
    expect(result).toEqual(2);
  });

  it("minOperations should return -1 for nums = [2,0,1,3]", () => {
    const nums = [2, 0, 1, 3];
    const result = minOperations(nums);
    expect(result).toEqual(-1);
  });
});
