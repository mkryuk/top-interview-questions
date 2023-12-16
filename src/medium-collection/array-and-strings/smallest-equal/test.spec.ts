import { smallestEqual } from "./solution";

describe("Smallest Index With Equal Value:", () => {
  it("smallestEqual should return 0 for nums = [0,1,2]", () => {
    const nums = [0, 1, 2];
    const result = smallestEqual(nums);
    expect(result).toEqual(0);
  });

  it("smallestEqual should return 2 for nums = [4,3,2,1]", () => {
    const nums = [4, 3, 2, 1];
    const result = smallestEqual(nums);
    expect(result).toEqual(2);
  });

  it("smallestEqual should return -1 for nums = [1,2,3,4,5,6,7,8,9,0]", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const result = smallestEqual(nums);
    expect(result).toEqual(-1);
  });
});
