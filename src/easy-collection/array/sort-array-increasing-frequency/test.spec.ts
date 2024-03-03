import { frequencySort } from "./solution";

describe("Sort Array by Increasing Frequency:", () => {
  it("frequencySort should return [3,1,1,2,2,2] for nums = [1,1,2,2,2,3]", () => {
    const nums = [1, 1, 2, 2, 2, 3];
    const result = frequencySort(nums);
    expect(result).toEqual([3, 1, 1, 2, 2, 2]);
  });

  it("frequencySort should return [1,3,3,2,2] for nums = [2,3,1,3,2]", () => {
    const nums = [2, 3, 1, 3, 2];
    const result = frequencySort(nums);
    expect(result).toEqual([1, 3, 3, 2, 2]);
  });

  it("frequencySort should return [5,-1,4,4,-6,-6,1,1,1] for nums = [-1,1,-6,4,5,-6,1,4,1]", () => {
    const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
    const result = frequencySort(nums);
    expect(result).toEqual([5, -1, 4, 4, -6, -6, 1, 1, 1]);
  });
});
