import { minCapability } from "./solution";

describe("House Robber IV", () => {
  it("minCapability should return 5 for nums = [2,3,5,9], k = 2", () => {
    const nums = [2, 3, 5, 9];
    const k = 2;
    const result = minCapability(nums, k);
    expect(result).toEqual(5);
  });

  it("minCapability should return 2 for nums = [2,7,9,3,1], k = 2", () => {
    const nums = [2, 7, 9, 3, 1];
    const k = 2;
    const result = minCapability(nums, k);
    expect(result).toEqual(2);
  });
});
