import { maximumLength } from "./solution";

describe("3201. Find the Maximum Length of Valid Subsequence I", () => {
  it("maximumLength should return 4 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = maximumLength(nums);
    expect(result).toEqual(4);
  });

  it("maximumLength should return 6 for nums = [1,2,1,1,2,1,2]", () => {
    const nums = [1, 2, 1, 1, 2, 1, 2];
    const result = maximumLength(nums);
    expect(result).toEqual(6);
  });

  it("maximumLength should return 2 for nums = [1,3]", () => {
    const nums = [1, 3];
    const result = maximumLength(nums);
    expect(result).toEqual(2);
  });
});
