import { buildArray } from "./solution-o1";

describe("Build Array from Permutation", () => {
  it("buildArray should return [0,1,2,4,5,3] for nums = [0,2,1,5,3,4]", () => {
    const nums = [0, 2, 1, 5, 3, 4];
    const result = buildArray(nums);
    expect(result).toEqual([0, 1, 2, 4, 5, 3]);
  });

  it("buildArray should return [4,5,0,1,2,3] for nums = [5,0,1,2,3,4]", () => {
    const nums = [5, 0, 1, 2, 3, 4];
    const result = buildArray(nums);
    expect(result).toEqual([4, 5, 0, 1, 2, 3]);
  });
});
