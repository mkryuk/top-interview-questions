import { singleNumber } from "./solution";

describe("Single Number III", () => {
  it("singleNumber should return [3,5] for nums = [1,2,1,3,2,5]", () => {
    const nums = [1, 2, 1, 3, 2, 5];
    const result = singleNumber(nums);
    expect(result.sort((a, b) => a - b)).toEqual([3, 5]);
  });

  it("singleNumber should return [-1,0] for nums = [-1,0]", () => {
    const nums = [-1, 0];
    const result = singleNumber(nums);
    expect(result.sort((a, b) => a - b)).toEqual([-1, 0]);
  });

  it("singleNumber should return [0,1] for nums = [0,1]", () => {
    const nums = [0, 1];
    const result = singleNumber(nums);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });
});
