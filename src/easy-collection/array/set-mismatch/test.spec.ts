import { findErrorNums } from "./solution";

describe("Set Mismatch:", () => {
  it("findErrorNums should return [2,3] for nums = [1,2,2,4]", () => {
    const nums = [1, 2, 2, 4];
    const result = findErrorNums(nums);
    expect(result).toEqual([2, 3]);
  });

  it("findErrorNums should return [1,2] for nums = [1,1]", () => {
    const nums = [1, 1];
    const result = findErrorNums(nums);
    expect(result).toEqual([1, 2]);
  });
});
