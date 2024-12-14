import { continuousSubarrays } from "./solution";

describe("Continuous Subarrays", () => {
  it("continuousSubarrays should return 8 for nums = [5,4,2,4]", () => {
    const nums = [5, 4, 2, 4];
    const result = continuousSubarrays(nums);
    expect(result).toEqual(8);
  });

  it("continuousSubarrays should return 6 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = continuousSubarrays(nums);
    expect(result).toEqual(6);
  });
});
