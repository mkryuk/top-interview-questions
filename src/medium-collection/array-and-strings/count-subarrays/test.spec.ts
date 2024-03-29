import { countSubarrays } from "./solution";

describe("Count Subarrays Where Max Element Appears at Least K Times", () => {
  it("countSubarrays should return 6 for nums = [1,3,2,3,3], k = 2", () => {
    const nums = [1, 3, 2, 3, 3];
    const k = 2;
    const result = countSubarrays(nums, k);
    expect(result).toEqual(6);
  });

  it("countSubarrays should return 0 for nums = [1,4,2,1], k = 3", () => {
    const nums = [1, 4, 2, 1];
    const k = 3;
    const result = countSubarrays(nums, k);
    expect(result).toEqual(0);
  });
});
