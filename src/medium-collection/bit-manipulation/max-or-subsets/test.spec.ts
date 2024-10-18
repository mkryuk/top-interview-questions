import { countMaxOrSubsets } from "./solution";

describe("Count Number of Maximum Bitwise-OR Subsets", () => {
  it("countMaxOrSubsets should return 2 for nums = [3,1]", () => {
    const nums = [3, 1];
    const result = countMaxOrSubsets(nums);
    expect(result).toEqual(2);
  });

  it("countMaxOrSubsets should return 7 for nums = [2,2,2]", () => {
    const nums = [2, 2, 2];
    const result = countMaxOrSubsets(nums);
    expect(result).toEqual(7);
  });

  it("countMaxOrSubsets should return 6 for nums = [3,2,1,5]", () => {
    const nums = [3, 2, 1, 5];
    const result = countMaxOrSubsets(nums);
    expect(result).toEqual(6);
  });
});
