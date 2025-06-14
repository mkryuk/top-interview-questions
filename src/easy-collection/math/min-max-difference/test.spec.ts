import { minMaxDifference } from "./solution";

describe("2566. Maximum Difference by Remapping a Digit", () => {
  it("minMaxDifference should return 99009 for num = 11891", () => {
    const num = 11891;
    const result = minMaxDifference(num);
    expect(result).toEqual(99009);
  });

  it("minMaxDifference should return 99 for num = 90", () => {
    const num = 90;
    const result = minMaxDifference(num);
    expect(result).toEqual(99);
  });
});
