import { maximumBeauty } from "./solution";

describe("Maximum Beauty of an Array After Applying Operation", () => {
  it("maximumBeauty should return 3 for nums = [4,6,1,2], k = 2", () => {
    const nums = [4, 6, 1, 2];
    const k = 2;
    const result = maximumBeauty(nums, k);
    expect(result).toEqual(3);
  });

  it("maximumBeauty should return 4 for nums = [1,1,1,1], k = 10", () => {
    const nums = [1, 1, 1, 1];
    const k = 10;
    const result = maximumBeauty(nums, k);
    expect(result).toEqual(4);
  });
});
