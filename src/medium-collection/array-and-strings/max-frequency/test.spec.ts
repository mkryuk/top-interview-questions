import { maxFrequency } from "./solution";

describe("Frequency of the Most Frequent Element:", () => {
  it("maxFrequency should return 3 for nums = [1,2,4], k = 5", () => {
    const nums = [1, 2, 4];
    const k = 5;
    const result = maxFrequency(nums, k);
    expect(result).toEqual(3);
  });

  it("maxFrequency should return 2 for nums = [1,4,8,13], k = 5", () => {
    const nums = [1, 4, 8, 13];
    const k = 5;
    const result = maxFrequency(nums, k);
    expect(result).toEqual(2);
  });

  it("maxFrequency should return 1 for nums = [3,9,6], k = 2", () => {
    const nums = [3, 9, 6];
    const k = 2;
    const result = maxFrequency(nums, k);
    expect(result).toEqual(1);
  });
});
