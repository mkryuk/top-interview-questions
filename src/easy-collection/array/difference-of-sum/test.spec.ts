import { differenceOfSum } from "./solution";

describe("Difference Between Element Sum and Digit Sum of an Array", () => {
  it("differenceOfSum should return 9 for nums = [1,15,6,3]", () => {
    const nums = [1, 15, 6, 3];
    const result = differenceOfSum(nums);
    expect(result).toEqual(9);
  });

  it("differenceOfSum should return 0 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = differenceOfSum(nums);
    expect(result).toEqual(0);
  });
});
