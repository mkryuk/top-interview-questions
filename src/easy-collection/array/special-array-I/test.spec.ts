import { isArraySpecial } from "./solution";

describe("Special Array I", () => {
  it("isArraySpecial should return true for nums = [1]", () => {
    const nums = [1];
    const result = isArraySpecial(nums);
    expect(result).toBeTrue();
  });

  it("isArraySpecial should return true for nums = [2,1,4]", () => {
    const nums = [2, 1, 4];
    const result = isArraySpecial(nums);
    expect(result).toBeTrue();
  });

  it("isArraySpecial should return false for  nums = [4,3,1,6]", () => {
    const nums = [4, 3, 1, 6];
    const result = isArraySpecial(nums);
    expect(result).toBeFalse();
  });
});
