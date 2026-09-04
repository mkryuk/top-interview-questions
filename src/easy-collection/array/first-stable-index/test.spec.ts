import { firstStableIndex } from "./solution";

describe("3903. Smallest Stable Index I:", () => {
  it("firstStableIndex should return 3 for nums = [5,0,1,4], k = 3", () => {
    const nums = [5, 0, 1, 4];
    const k = 3;
    const result = firstStableIndex(nums, k);
    expect(result).toEqual(3);
  });

  it("firstStableIndex should return -1 for nums = [3,2,1], k = 1", () => {
    const nums = [3, 2, 1];
    const k = 1;
    const result = firstStableIndex(nums, k);
    expect(result).toEqual(-1);
  });

  it("firstStableIndex should return 0 for nums = [0], k = 0", () => {
    const nums = [0];
    const k = 0;
    const result = firstStableIndex(nums, k);
    expect(result).toEqual(0);
  });
});
