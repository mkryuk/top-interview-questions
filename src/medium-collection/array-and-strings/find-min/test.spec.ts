import { findMin } from "./solution";

describe("153. Find Minimum in Rotated Sorted Array:", () => {
  it("findMin should return 1 for nums = [3,4,5,1,2]", () => {
    const nums = [3, 4, 5, 1, 2];
    const result = findMin(nums);
    expect(result).toEqual(1);
  });

  it("findMin should return 0 for nums = [4,5,6,7,0,1,2]", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const result = findMin(nums);
    expect(result).toEqual(0);
  });

  it("findMin should return 11 for nums = [11,13,15,17]", () => {
    const nums = [11, 13, 15, 17];
    const result = findMin(nums);
    expect(result).toEqual(11);
  });
});
