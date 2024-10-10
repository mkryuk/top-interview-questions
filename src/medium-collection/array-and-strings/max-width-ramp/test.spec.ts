import { maxWidthRamp } from "./solution";

describe("Maximum Width Ramp", () => {
  it("maxWidthRamp should return 4 for nums = [6,0,8,2,1,5]", () => {
    const nums = [6, 0, 8, 2, 1, 5];
    const result = maxWidthRamp(nums);
    expect(result).toEqual(4);
  });

  it("maxWidthRamp should return 7 for nums = [9,8,1,0,1,9,4,0,4,1]", () => {
    const nums = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1];
    const result = maxWidthRamp(nums);
    expect(result).toEqual(7);
  });
});
