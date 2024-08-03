import { minSwaps } from "./solution";

describe("Minimum Swaps to Group All 1's Together II", () => {
  it("minSwaps should return 1 for nums = [0,1,0,1,1,0,0]", () => {
    const nums = [0, 1, 0, 1, 1, 0, 0];
    const result = minSwaps(nums);
    expect(result).toEqual(1);
  });

  it("minSwaps should return 2 for nums = [0,1,1,1,0,0,1,1,0]", () => {
    const nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];
    const result = minSwaps(nums);
    expect(result).toEqual(2);
  });

  it("minSwaps should return 0 for nums = [1,1,0,0,1]", () => {
    const nums = [1, 1, 0, 0, 1];
    const result = minSwaps(nums);
    expect(result).toEqual(0);
  });

  it("minSwaps should return 3 for nums = [0,1,1,0,0,1,0,1]", () => {
    const nums = [0, 1, 1, 0, 0, 1, 0, 1, 0];
    const result = minSwaps(nums);
    expect(result).toEqual(3);
  });
});
