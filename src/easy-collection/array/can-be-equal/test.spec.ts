import { canBeEqual } from "./solution";

describe("Make Two Arrays Equal by Reversing Subarrays", () => {
  it("canBeEqual should return true for target = [1,2,3,4], arr = [2,4,1,3]", () => {
    const target = [1, 2, 3, 4];
    const arr = [2, 4, 1, 3];
    const result = canBeEqual(target, arr);
    expect(result).toBeTrue();
  });

  it("canBeEqual should return true for target = [7], arr = [7]", () => {
    const target = [7];
    const arr = [7];
    const result = canBeEqual(target, arr);
    expect(result).toBeTrue();
  });

  it("canBeEqual should return false for target = [3,7,9], arr = [3,7,11]", () => {
    const target = [3, 7, 9];
    const arr = [3, 7, 11];
    const result = canBeEqual(target, arr);
    expect(result).toBeFalse();
  });
});
