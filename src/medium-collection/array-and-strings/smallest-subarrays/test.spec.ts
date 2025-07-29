import { smallestSubarrays } from "./solution";

describe("2411. Smallest Subarrays With Maximum Bitwise OR", () => {
  it("smallestSubarrays should return [3,3,2,2,1] for nums = [1,0,2,1,3]", () => {
    const nums = [1, 0, 2, 1, 3];
    const result = smallestSubarrays(nums);
    expect(result).toEqual([3, 3, 2, 2, 1]);
  });

  it("smallestSubarrays should return [2,1] for nums = [1,2]", () => {
    const nums = [1, 2];
    const result = smallestSubarrays(nums);
    expect(result).toEqual([2, 1]);
  });
});
