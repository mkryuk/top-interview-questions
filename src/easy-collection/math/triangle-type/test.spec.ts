import { triangleType } from "./solution";

describe("Type of Triangle", () => {
  it('triangleType should return "equilateral" for nums = [3,3,3]', () => {
    const nums = [3, 3, 3];
    const result = triangleType(nums);
    expect(result).toEqual("equilateral");
  });

  it('triangleType should return "scalene" for nums = [3,4,5]', () => {
    const nums = [3, 4, 5];
    const result = triangleType(nums);
    expect(result).toEqual("scalene");
  });
});
