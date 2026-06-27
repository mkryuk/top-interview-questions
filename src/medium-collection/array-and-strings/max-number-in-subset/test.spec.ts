import { maximumLength } from "./solution";

describe("3020. Find the Maximum Number of Elements in Subset:", () => {
  it("maximumLength should return 3 for nums = [5,4,1,2,2]", () => {
    const nums = [5, 4, 1, 2, 2];
    const result = maximumLength(nums);
    expect(result).toEqual(3);
  });

  it("maximumLength should return 1 for nums = [1,3,2,4]", () => {
    const nums = [1, 3, 2, 4];
    const result = maximumLength(nums);
    expect(result).toEqual(1);
  });
});
