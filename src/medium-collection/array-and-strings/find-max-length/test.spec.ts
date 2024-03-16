import { findMaxLength } from "./solution";

describe("Contiguous Array:", () => {
  it("findMaxLength should return 2 for nums = [0,1]", () => {
    const nums = [0, 1];
    const result = findMaxLength(nums);
    expect(result).toEqual(2);
  });

  it("findMaxLength should return 2 for nums = [0,1,0]", () => {
    const nums = [0, 1, 0];
    const result = findMaxLength(nums);
    expect(result).toEqual(2);
  });
});
