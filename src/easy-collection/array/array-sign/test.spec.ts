import { arraySign } from "./solution";

describe("Sign of the Product of an Array", () => {
  it("should return 1 for nums = [-1,-2,-3,-4,3,2,1]", () => {
    const nums = [-1, -2, -3, -4, 3, 2, 1];
    const result = arraySign(nums);
    expect(result).toEqual(1);
  });
  it("should return 0 for nums = [1,5,0,2,-3]", () => {
    const nums = [1, 5, 0, 2, -3];
    const result = arraySign(nums);
    expect(result).toEqual(0);
  });
  it("should return -1 for nums = [-1,1,-1,1,-1]", () => {
    const nums = [-1, 1, -1, 1, -1];
    const result = arraySign(nums);
    expect(result).toEqual(-1);
  });
});
