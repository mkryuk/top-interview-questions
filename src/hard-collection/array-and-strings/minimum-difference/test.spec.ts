import { minimumDifference } from "./solution";

describe("2163. Minimum Difference in Sums After Removal of Elements", () => {
  it("minimumDifference should return -1 for nums = [3,1,2]", () => {
    const nums = [3, 1, 2];
    const result = minimumDifference(nums);
    expect(result).toEqual(-1);
  });

  it("minimumDifference should return 1 for nums = [7,9,5,8,1,3]", () => {
    const nums = [7, 9, 5, 8, 1, 3];
    const result = minimumDifference(nums);
    expect(result).toEqual(1);
  });
});
