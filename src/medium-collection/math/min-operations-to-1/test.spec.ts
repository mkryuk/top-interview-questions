import { minOperations } from "./solution";

describe("2654. Minimum Number of Operations to Make All Array Elements Equal to 1", () => {
  it("minOperations should return 4 for nums = [2,6,3,4]", () => {
    const nums = [2, 6, 3, 4];
    const result = minOperations(nums);
    expect(result).toEqual(4);
  });

  it("minOperations should return -1 for nums = [2,10,6,14]", () => {
    const nums = [2, 10, 6, 14];
    const result = minOperations(nums);
    expect(result).toEqual(-1);
  });
});
