import { minOperations } from "./solution";

describe("Minimum Number of Operations to Make Array Empty:", () => {
  it("minOperations should return 4 for nums = [2,3,3,2,2,4,2,3,4]", () => {
    const nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
    const result = minOperations(nums);
    expect(result).toEqual(4);
  });

  it("minOperations should return -1 for nums = [2,1,2,2,3,3]", () => {
    const nums = [2, 1, 2, 2, 3, 3];
    const result = minOperations(nums);
    expect(result).toEqual(-1);
  });

  it("minOperations should return 7 for nums = [14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]", () => {
    const nums = [14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12];
    const result = minOperations(nums);
    expect(result).toEqual(7);
  });
});
