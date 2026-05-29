import { minElement } from "./solution";

describe("3300. Minimum Element After Replacement With Digit Sum:", () => {
  it("minElement should return 1 for nums = [10,12,13,14]", () => {
    const nums = [10, 12, 13, 14];
    const result = minElement(nums);
    expect(result).toEqual(1);
  });

  it("minElement should return 1 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = minElement(nums);
    expect(result).toEqual(1);
  });

  it("minElement should return 10 for nums = [999,19,199]", () => {
    const nums = [999, 19, 199];
    const result = minElement(nums);
    expect(result).toEqual(10);
  });
});
