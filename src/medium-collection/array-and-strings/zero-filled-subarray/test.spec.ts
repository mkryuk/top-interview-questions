import { zeroFilledSubarray } from "./solution";

describe("Number of Zero-Filled Subarrays", () => {
  it("zeroFilledSubarray should return 6 for nums = [1,3,0,0,2,0,0,4]", () => {
    const nums = [1, 3, 0, 0, 2, 0, 0, 4];
    const result = zeroFilledSubarray(nums);
    expect(result).toBe(6);
  });

  it("zeroFilledSubarray should return 9 for nums = [0,0,0,2,0,0]", () => {
    const nums = [0, 0, 0, 2, 0, 0];
    const result = zeroFilledSubarray(nums);
    expect(result).toBe(9);
  });

  it("zeroFilledSubarray should return 0 for nums = [2,10,2019]", () => {
    const nums = [2, 10, 2019];
    const result = zeroFilledSubarray(nums);
    expect(result).toBe(0);
  });
});
