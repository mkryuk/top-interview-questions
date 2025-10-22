import { maxFrequency } from "./solution";

describe("3347. Maximum Frequency of an Element After Performing Operations II", () => {
  it("maxFrequency should return 2 for nums = [1,4,5], k = 1, numOperations = 2", () => {
    const nums = [1, 4, 5];
    const k = 1;
    const numOperations = 2;
    const result = maxFrequency(nums, k, numOperations);
    expect(result).toEqual(2);
  });

  it("maxFrequency should return 2 for nums = [5,11,20,20], k = 5, numOperations = 1", () => {
    const nums = [5, 11, 20, 20];
    const k = 5;
    const numOperations = 1;
    const result = maxFrequency(nums, k, numOperations);
    expect(result).toEqual(2);
  });
});
