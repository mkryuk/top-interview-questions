import { maxValue } from "./solution";

describe("3660. Jump Game IX:", () => {
  it("maxValue should return [2,2,3] for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = maxValue(nums);
    expect(result).toEqual([2, 2, 3]);
  });

  it("maxValue should return [3,3,3] for nums = [2,3,1]", () => {
    const nums = [2, 3, 1];
    const result = maxValue(nums);
    expect(result).toEqual([3, 3, 3]);
  });
});
