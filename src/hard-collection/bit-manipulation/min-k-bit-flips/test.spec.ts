import { minKBitFlips } from "./solution";

describe("Minimum Number of K Consecutive Bit Flips", () => {
  it("minKBitFlips should return 2 for nums = [0,1,0], k = 1", () => {
    const nums = [0, 1, 0];
    const k = 1;
    const result = minKBitFlips(nums, k);
    expect(result).toEqual(2);
  });

  it("minKBitFlips should return -1 for nums = [1,1,0], k = 2", () => {
    const nums = [1, 1, 0];
    const k = 2;
    const result = minKBitFlips(nums, k);
    expect(result).toEqual(-1);
  });

  it("minKBitFlips should return 3 for nums = [0,0,0,1,0,1,1,0], k = 3", () => {
    const nums = [0, 0, 0, 1, 0, 1, 1, 0];
    const k = 3;
    const result = minKBitFlips(nums, k);
    expect(result).toEqual(3);
  });
});
