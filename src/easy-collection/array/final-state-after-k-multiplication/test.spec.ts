import { getFinalState } from "./solution";

describe("Final Array State After K Multiplication Operations I", () => {
  it("getFinalState should return [8,4,6,5,6] for nums = [2,1,3,5,6], k = 5, multiplier = 2", () => {
    const nums = [2, 1, 3, 5, 6];
    const k = 5;
    const multiplier = 2;
    const result = getFinalState(nums, k, multiplier);
    expect(result).toEqual([8, 4, 6, 5, 6]);
  });

  it("getFinalState should return [16,8] for nums = [1,2], k = 3, multiplier = 4", () => {
    const nums = [1, 2];
    const k = 3;
    const multiplier = 4;
    const result = getFinalState(nums, k, multiplier);
    expect(result).toEqual([16, 8]);
  });
});
