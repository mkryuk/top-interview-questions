import { countCompleteSubarrays } from "./solution";

describe("Count Complete Subarrays in an Array", () => {
  it("countCompleteSubarrays should return 4 for nums = [1,3,1,2,2]", () => {
    const nums = [1, 3, 1, 2, 2];
    const result = countCompleteSubarrays(nums);
    expect(result).toEqual(4);
  });

  it("countCompleteSubarrays should return 10 for nums = [5,5,5,5]", () => {
    const nums = [5, 5, 5, 5];
    const result = countCompleteSubarrays(nums);
    expect(result).toEqual(10);
  });

  it("countCompleteSubarrays should return 2 for [459,459,962,1579,1435,756,1872,1597]", () => {
    const nums = [459, 459, 962, 1579, 1435, 756, 1872, 1597];
    const result = countCompleteSubarrays(nums);
    expect(result).toEqual(2);
  });
});
