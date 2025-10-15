import { maxIncreasingSubarrays } from "./solution";

describe("3350. Adjacent Increasing Subarrays Detection II", () => {
  it("maxIncreasingSubarrays should return 3 for nums = [2,5,7,8,9,2,3,4,3,1]", () => {
    const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
    const result = maxIncreasingSubarrays(nums);
    expect(result).toEqual(3);
  });

  it("maxIncreasingSubarrays should return 2 for nums = [1,2,3,4,4,4,4,5,6,7]", () => {
    const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
    const result = maxIncreasingSubarrays(nums);
    expect(result).toEqual(2);
  });
});
