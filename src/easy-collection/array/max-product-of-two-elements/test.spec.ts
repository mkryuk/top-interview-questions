import { maxProduct } from "./solution";

describe("Maximum Product of Two Elements in an Array:", () => {
  it("maxProduct should return 12 for nums = [3,4,5,2]", () => {
    const nums = [3, 4, 5, 2];
    const result = maxProduct(nums);
    expect(result).toEqual(12);
  });

  it("maxProduct should return 16 for nums = [1,5,4,5]", () => {
    const nums = [1, 5, 4, 5];
    const result = maxProduct(nums);
    expect(result).toEqual(16);
  });

  it("maxProduct should return 12 for nums = [3,7]", () => {
    const nums = [3, 7];
    const result = maxProduct(nums);
    expect(result).toEqual(12);
  });
});
