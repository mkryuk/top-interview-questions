import { minimumMountainRemovals } from "./solution";

describe("Minimum Number of Removals to Make Mountain Array", () => {
  it("minimumMountainRemovals should return 0 for nums = [1,3,1]", () => {
    const nums = [1, 3, 1];
    const result = minimumMountainRemovals(nums);
    expect(result).toEqual(0);
  });

  it("minimumMountainRemovals should return 3 for nums = [2,1,1,5,6,2,3,1]", () => {
    const nums = [2, 1, 1, 5, 6, 2, 3, 1];
    const result = minimumMountainRemovals(nums);
    expect(result).toEqual(3);
  });
});
