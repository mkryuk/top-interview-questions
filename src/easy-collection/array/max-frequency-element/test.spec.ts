import { maxFrequencyElements } from "./solution";

describe("3005. Count Elements With Maximum Frequency:", () => {
  it("maxFrequencyElements should return 4 for nums = [1,2,2,3,1,4]", () => {
    const nums = [1, 2, 2, 3, 1, 4];
    const result = maxFrequencyElements(nums);
    expect(result).toEqual(4);
  });

  it("maxFrequencyElements should return 5 for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = maxFrequencyElements(nums);
    expect(result).toEqual(5);
  });
});
