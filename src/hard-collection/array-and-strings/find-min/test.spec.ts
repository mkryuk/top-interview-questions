import { findMin } from "./solution";

describe("154. Find Minimum in Rotated Sorted Array II:", () => {
  it("findMin should return 1 for nums = [1,3,5]", () => {
    const nums = [1, 3, 5];
    const result = findMin(nums);
    expect(result).toEqual(1);
  });

  it("findMin should return 0 for nums = [2,2,2,0,1]", () => {
    const nums = [2, 2, 2, 0, 1];
    const result = findMin(nums);
    expect(result).toEqual(0);
  });
});
