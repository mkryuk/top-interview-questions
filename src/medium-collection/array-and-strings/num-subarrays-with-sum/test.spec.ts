import { numSubarraysWithSum } from "./solution";

describe("Binary Subarrays With Sum", () => {
  it("numSubarraysWithSum should return 4 for nums = [1,0,1,0,1], goal = 2", () => {
    const nums = [1, 0, 1, 0, 1];
    const goal = 2;
    const result = numSubarraysWithSum(nums, goal);
    expect(result).toEqual(4);
  });

  it("numSubarraysWithSum should return 15 for nums = [0,0,0,0,0], goal = 0", () => {
    const nums = [0, 0, 0, 0, 0];
    const goal = 0;
    const result = numSubarraysWithSum(nums, goal);
    expect(result).toEqual(15);
  });
});
