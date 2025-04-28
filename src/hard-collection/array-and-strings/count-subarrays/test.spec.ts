import { countSubarrays } from "./solution";

describe("Count Subarrays With Score Less Than K", () => {
  it("countSubarrays should return 6 for nums = [2,1,4,3,5], k = 10", () => {
    const nums = [2, 1, 4, 3, 5];
    const k = 10;
    const result = countSubarrays(nums, k);
    expect(result).toEqual(6);
  });

  it("countSubarrays should return 5 for nums = [1,1,1], k = 5", () => {
    const nums = [1, 1, 1];
    const k = 5;
    const result = countSubarrays(nums, k);
    expect(result).toEqual(5);
  });
});
