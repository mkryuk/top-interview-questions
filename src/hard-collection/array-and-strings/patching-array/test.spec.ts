import { minPatches } from "./solution";

describe(" Patching Array", () => {
  it("minPatches should return 1 for nums = [1,3], n = 6", () => {
    const nums = [1, 3];
    const n = 6;
    expect(minPatches(nums, n)).toBe(1);
  });

  it("minPatches should return 2 for nums = [1,5,10], n = 20", () => {
    const nums = [1, 5, 10];
    const n = 20;
    expect(minPatches(nums, n)).toBe(2);
  });

  it("minPatches should return 0 for nums = [1,2,2], n = 5", () => {
    const nums = [1, 2, 2];
    const n = 5;
    expect(minPatches(nums, n)).toBe(0);
  });
});
