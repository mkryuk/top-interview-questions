import { maximumJumps } from "./solution";

describe("2770. Maximum Number of Jumps to Reach the Last Index:", () => {
  it("maximumJumps should return 3 for nums = [1,3,6,4,1,2], target = 2", () => {
    const nums = [1, 3, 6, 4, 1, 2];
    const target = 2;
    const result = maximumJumps(nums, target);
    expect(result).toEqual(3);
  });

  it("maximumJumps should return 5 for nums = [1,3,6,4,1,2], target = 3", () => {
    const nums = [1, 3, 6, 4, 1, 2];
    const target = 3;
    const result = maximumJumps(nums, target);
    expect(result).toEqual(5);
  });

  it("maximumJumps should return -1 for nums = [1,3,6,4,1,2], target = 0", () => {
    const nums = [1, 3, 6, 4, 1, 2];
    const target = 0;
    const result = maximumJumps(nums, target);
    expect(result).toEqual(-1);
  });
});
