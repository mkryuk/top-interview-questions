import { maximumUniqueSubarray } from "./solution";

describe("1695. Maximum Erasure Value", () => {
  it("maximumUniqueSubarray should return 17 for nums = [4,2,4,5,6]", () => {
    const nums = [4, 2, 4, 5, 6];
    const result = maximumUniqueSubarray(nums);
    expect(result).toEqual(17);
  });

  it("maximumUniqueSubarray should return 8 for nums = [5,2,1,2,5,2,1,2,5]", () => {
    const nums = [5, 2, 1, 2, 5, 2, 1, 2, 5];
    const result = maximumUniqueSubarray(nums);
    expect(result).toEqual(8);
  });
});
