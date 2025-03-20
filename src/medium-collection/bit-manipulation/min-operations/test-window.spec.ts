import { minOperations } from "./solution-window";

describe("Minimum Operations to Make Binary Array Elements Equal to One I", () => {
  it("minOperations should return 3 for nums = [0,1,1,1,0,0]", () => {
    const nums = [0, 1, 1, 1, 0, 0];
    const result = minOperations(nums);
    expect(result).toEqual(3);
  });

  it("minOperations should return -1 for nums = [0,1,1,1]", () => {
    const nums = [0, 1, 1, 1];
    const result = minOperations(nums);
    expect(result).toEqual(-1);
  });
});
