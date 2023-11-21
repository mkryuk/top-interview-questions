import { countNicePairs } from "./solution";

describe("Count Nice Pairs in an Array:", () => {
  it("countNicePairs should return 2 for nums = [42,11,1,97]", () => {
    const nums = [42, 11, 1, 97];
    const result = countNicePairs(nums);
    expect(result).toEqual(2);
  });

  it("countNicePairs should return 4 for nums = [13,10,35,24,76]", () => {
    const nums = [13, 10, 35, 24, 76];
    const result = countNicePairs(nums);
    expect(result).toEqual(4);
  });
});
