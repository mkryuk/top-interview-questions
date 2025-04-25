import { countInterestingSubarrays } from "./solution";

describe("Count of Interesting Subarrays", () => {
  it("countInterestingSubarrays should return 3 for nums = [3,2,4], modulo = 2, k = 1", () => {
    const nums = [3, 2, 4];
    const modulo = 2;
    const k = 1;
    const result = countInterestingSubarrays(nums, modulo, k);
    expect(result).toEqual(3);
  });

  it("countInterestingSubarrays should return 2 for nums = [3,1,9,6], modulo = 3, k = 0", () => {
    const nums = [3, 1, 9, 6];
    const modulo = 3;
    const k = 0;
    const result = countInterestingSubarrays(nums, modulo, k);
    expect(result).toEqual(2);
  });
});
