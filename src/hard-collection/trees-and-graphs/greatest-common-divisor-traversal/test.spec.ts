import { canTraverseAllPairs } from "./solution";

describe("Greatest Common Divisor Traversal:", () => {
  it("canTraverseAllPairs should return true for nums = [2,3,6]", () => {
    const nums = [2, 3, 6];
    const ressult = canTraverseAllPairs(nums);
    expect(ressult).toBeTrue();
  });

  it("canTraverseAllPairs should return true for nums = [3,9,5]", () => {
    const nums = [3, 9, 5];
    const ressult = canTraverseAllPairs(nums);
    expect(ressult).toBeFalse();
  });

  it("canTraverseAllPairs should return true for nums = [4,3,12,8]", () => {
    const nums = [4, 3, 12, 8];
    const ressult = canTraverseAllPairs(nums);
    expect(ressult).toBeTrue();
  });
});
