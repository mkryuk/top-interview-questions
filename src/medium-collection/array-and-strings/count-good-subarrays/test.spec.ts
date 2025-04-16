import { countGood } from "./solution";

describe("Count the Number of Good Subarrays", () => {
  it("countGood should return 1 for nums = [1,1,1,1,1], k = 10", () => {
    const nums = [1, 1, 1, 1, 1];
    const k = 10;
    const result = countGood(nums, k);
    expect(result).toEqual(1);
  });

  it("countGood should return 4 for nums = [3,1,4,3,2,2,4], k = 2", () => {
    const nums = [3, 1, 4, 3, 2, 2, 4];
    const k = 2;
    const result = countGood(nums, k);
    expect(result).toEqual(4);
  });
});
