import { missingInteger } from "./solution";

describe("2996. Smallest Missing Integer Greater Than Sequential Prefix Sum:", () => {
  it("missingInteger should return 6 for nums = [1,2,3,2,5]", () => {
    const nums = [1, 2, 3, 2, 5];
    const result = missingInteger(nums);
    expect(result).toEqual(6);
  });

  it("missingInteger should return 15 for nums = [3,4,5,1,12,14,13]", () => {
    const nums = [3, 4, 5, 1, 12, 14, 13];
    const result = missingInteger(nums);
    expect(result).toEqual(15);
  });
});
