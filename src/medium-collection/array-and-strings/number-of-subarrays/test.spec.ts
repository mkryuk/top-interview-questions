import { numberOfSubarrays } from "./solution";

describe("Count Number of Nice Subarrays", () => {
  it("numberOfSubarrays should return 2 for nums = [1,1,2,1,1], k = 3", () => {
    const nums = [1, 1, 2, 1, 1];
    const k = 3;
    const result = numberOfSubarrays(nums, k);
    expect(result).toEqual(2);
  });

  it("numberOfSubarrays should return 0 for nums = [2,4,6], k = 1", () => {
    const nums = [2, 4, 6];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays should return 16 for nums = [2,2,2,1,2,2,1,2,2,2], k = 2", () => {
    const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
    const k = 2;
    const result = numberOfSubarrays(nums, k);
    expect(result).toEqual(16);
  });
});
