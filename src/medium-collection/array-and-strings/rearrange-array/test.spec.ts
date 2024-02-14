import { rearrangeArray } from "./solution";

describe("Rearrange Array Elements by Sign:", () => {
  it("rearrangeArray should return [3,-2,1,-5,2,-4] for nums = [3,1,-2,-5,2,-4]", () => {
    const nums = [3, 1, -2, -5, 2, -4];
    const result = rearrangeArray(nums);
    expect(result).toEqual([3, -2, 1, -5, 2, -4]);
  });

  it("rearrangeArray should return [1,-1] for nums = [-1,1]", () => {
    const nums = [-1, 1];
    const result = rearrangeArray(nums);
    expect(result).toEqual([1, -1]);
  });
});
