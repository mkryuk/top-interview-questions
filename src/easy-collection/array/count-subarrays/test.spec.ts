import { countSubarrays } from "./solution";

describe("Count Subarrays of Length Three With a Condition", () => {
  it("countSubarrays should return 1 for nums = [1,2,1,4,1]", () => {
    const nums = [1, 2, 1, 4, 1];
    const result = countSubarrays(nums);
    expect(result).toEqual(1);
  });

  it("countSubarrays should return 0 for nums = [1,1,1]", () => {
    const nums = [1, 1, 1];
    const result = countSubarrays(nums);
    expect(result).toEqual(0);
  });
});
