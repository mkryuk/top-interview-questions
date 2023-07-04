import { singleNumber } from "./solution";

describe("Single Number II:", () => {
  it("singleNumber should return 3 for nums = [2,2,3,2]", () => {
    const nums = [2, 2, 3, 2];
    const result = singleNumber(nums);
    expect(result).toEqual(3);
  });

  it("singleNumber should return 99 for nums = [0,1,0,1,0,1,99]", () => {
    const nums = [0, 1, 0, 1, 0, 1, 99];
    const result = singleNumber(nums);
    expect(result).toEqual(99);
  });
});
