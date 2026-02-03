import { isTrionic } from "./solution";

describe("3637. Trionic Array I", () => {
  it("isTrionic should return true for nums = [1,3,5,4,2,6]", () => {
    const nums = [1, 3, 5, 4, 2, 6];
    const result = isTrionic(nums);
    expect(result).toBeTrue();
  });

  it("isTrionic should return false for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = isTrionic(nums);
    expect(result).toBeFalse();
  });
});
