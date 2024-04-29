import { minOperations } from "./solution";

describe("Minimum Number of Operations to Make Array XOR Equal to K", () => {
  it("minOperations should return 2 for nums = [2,1,3,4], k = 1", () => {
    const nums = [2, 1, 3, 4];
    const k = 1;
    const result = minOperations(nums, k);
    expect(result).toEqual(2);
  });

  it("minOperations should return 0 for nums = [2,0,2,0], k = 0", () => {
    const nums = [2, 0, 2, 0];
    const k = 0;
    const result = minOperations(nums, k);
    expect(result).toEqual(0);
  });
});
