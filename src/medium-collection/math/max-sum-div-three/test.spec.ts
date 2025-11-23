import { maxSumDivThree } from "./solution";

describe("1262. Greatest Sum Divisible by Three", () => {
  it("maxSumDivThree should return 18 for nums = [3,6,5,1,8]", () => {
    const nums = [3, 6, 5, 1, 8];
    const result = maxSumDivThree(nums);
    expect(result).toEqual(18);
  });

  it("maxSumDivThree should return 0 for nums = [4]", () => {
    const nums = [4];
    const result = maxSumDivThree(nums);
    expect(result).toEqual(0);
  });

  it("maxSumDivThree should return 12 for nums = [1,2,3,4,4]", () => {
    const nums = [1, 2, 3, 4, 4];
    const result = maxSumDivThree(nums);
    expect(result).toEqual(12);
  });
});
