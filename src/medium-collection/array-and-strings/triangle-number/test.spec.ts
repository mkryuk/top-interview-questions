import { triangleNumber } from "./solution";

describe("611. Valid Triangle Number", () => {
  it("triangleNumber should return 3 for nums = [2,2,3,4]", () => {
    const nums = [2, 2, 3, 4];
    const result = triangleNumber(nums);
    expect(result).toEqual(3);
  });

  it("triangleNumber should return 4 for nums = [4,2,3,4]", () => {
    const nums = [4, 2, 3, 4];
    const result = triangleNumber(nums);
    expect(result).toEqual(4);
  });
});
