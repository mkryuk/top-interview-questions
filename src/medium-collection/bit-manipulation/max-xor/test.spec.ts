import { getMaximumXor } from "./solution";

describe("Maximum XOR for Each Query", () => {
  it("getMaximumXor should return [0,3,2,3] for nums = [0,1,1,3], maximumBit = 2", () => {
    const nums = [0, 1, 1, 3];
    const maximumBit = 2;
    const result = getMaximumXor(nums, maximumBit);
    expect(result).toEqual([0, 3, 2, 3]);
  });

  it("getMaximumXor should return [5,2,6,5] for nums = [2,3,4,7], maximumBit = 3", () => {
    const nums = [2, 3, 4, 7];
    const maximumBit = 3;
    const result = getMaximumXor(nums, maximumBit);
    expect(result).toEqual([5, 2, 6, 5]);
  });

  it("getMaximumXor should return [4,3,6,4,6,7] for nums = [0,1,2,2,5,7], maximumBit = 3", () => {
    const nums = [0, 1, 2, 2, 5, 7];
    const maximumBit = 3;
    const result = getMaximumXor(nums, maximumBit);
    expect(result).toEqual([4, 3, 6, 4, 6, 7]);
  });
});
