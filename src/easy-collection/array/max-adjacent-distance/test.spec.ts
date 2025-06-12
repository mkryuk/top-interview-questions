import { maxAdjacentDistance } from "./solution";

describe("3423. Maximum Difference Between Adjacent Elements in a Circular Array", () => {
  it("maxAdjacentDistance should return 3 for nums = [1,2,4]", () => {
    const nums = [1, 2, 4];
    const result = maxAdjacentDistance(nums);
    expect(result).toEqual(3);
  });

  it("maxAdjacentDistance should return 5 for nums = [-5,-10,-5]", () => {
    const nums = [-5, -10, -5];
    const result = maxAdjacentDistance(nums);
    expect(result).toEqual(5);
  });
});
