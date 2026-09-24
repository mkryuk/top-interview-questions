import { smallestIndex } from "./solution";

describe("3550. Smallest Index With Digit Sum Equal to Index:", () => {
  it("returns 2 for nums = [1,3,2]", () => {
    const nums = [1, 3, 2];
    const result = smallestIndex(nums);
    expect(result).toEqual(2);
  });

  it("returns 1 for nums = [1,10,11]", () => {
    const nums = [1, 10, 11];
    const result = smallestIndex(nums);
    expect(result).toEqual(1);
  });

  it("returns -1 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = smallestIndex(nums);
    expect(result).toEqual(-1);
  });
});
