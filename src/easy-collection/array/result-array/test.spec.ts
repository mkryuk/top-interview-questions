import { resultArray } from "./solution";

describe("3069. Distribute Elements Into Two Arrays I:", () => {
  it("resultArray should return [2,3,1] for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = resultArray(nums);
    expect(result).toEqual([2, 3, 1]);
  });

  it("resultArray should return [5,3,4,8] for nums = [5,4,3,8]", () => {
    const nums = [5, 4, 3, 8];
    const result = resultArray(nums);
    expect(result).toEqual([5, 3, 4, 8]);
  });
});
