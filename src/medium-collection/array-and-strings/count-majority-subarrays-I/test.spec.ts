import { countMajoritySubarrays } from "./solution";

describe("3737. Count Subarrays With Majority Element I:", () => {
  it("countMajoritySubarrays should return 5 for nums = [1,2,2,3], target = 2", () => {
    const nums = [1, 2, 2, 3];
    const target = 2;
    const result = countMajoritySubarrays(nums, target);
    expect(result).toEqual(5);
  });

  it("countMajoritySubarrays should return 10 for nums = [1,1,1,1], target = 1", () => {
    const nums = [1, 1, 1, 1];
    const target = 1;
    const result = countMajoritySubarrays(nums, target);
    expect(result).toEqual(10);
  });

  it("countMajoritySubarrays should return 0 for nums = [1,2,3], target = 4", () => {
    const nums = [1, 2, 3];
    const target = 4;
    const result = countMajoritySubarrays(nums, target);
    expect(result).toEqual(0);
  });
});
