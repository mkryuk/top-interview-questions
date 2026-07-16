import { gcdSum } from "./solution";

describe("3867. Sum of GCD of Formed Pairs:", () => {
  it("gcdSum should return 2 for nums = [2,6,4]", () => {
    const nums = [2, 6, 4];
    const result = gcdSum(nums);
    expect(result).toEqual(2);
  });

  it("gcdSum should return 5 for nums = [3,6,2,8]", () => {
    const nums = [3, 6, 2, 8];
    const result = gcdSum(nums);
    expect(result).toEqual(5);
  });
});
