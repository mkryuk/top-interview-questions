import { findNonMinOrMax } from "./solution";

describe("Neither Minimum nor Maximum", () => {
  it("findNonMinOrMax should return 3 for nums = [3,2,1,4]", () => {
    const nums = [3, 2, 1, 4];
    const result = findNonMinOrMax(nums);
    expect(result).toBe(3);
  });

  it("findNonMinOrMax should return -1 for nums = [1,2]", () => {
    const nums = [1, 2];
    const result = findNonMinOrMax(nums);
    expect(result).toBe(-1);
  });

  it("findNonMinOrMax should return 2 for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = findNonMinOrMax(nums);
    expect(result).toBe(2);
  });
});
