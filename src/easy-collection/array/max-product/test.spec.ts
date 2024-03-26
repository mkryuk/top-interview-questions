import { maximumProduct } from "./solution";

describe("Maximum Product of Three Numbers:", () => {
  it("maximumProduct should return 6 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = maximumProduct(nums);
    expect(result).toEqual(6);
  });

  it("maximumProduct should return 24 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = maximumProduct(nums);
    expect(result).toEqual(24);
  });

  it("maximumProduct should return -6 for nums = [-1,-2,-3]", () => {
    const nums = [-1, -2, -3];
    const result = maximumProduct(nums);
    expect(result).toEqual(-6);
  });
});
