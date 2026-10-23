import { sortPermutation } from "./solution";

describe("3644. Maximum K to Sort a Permutation:", () => {
  it("sortPermutation should return 1 for nums = [0,3,2,1]", () => {
    const nums = [0, 3, 2, 1];
    const result = sortPermutation(nums);
    expect(result).toEqual(1);
  });

  it("sortPermutation should return 2 for nums = [0,1,3,2]", () => {
    const nums = [0, 1, 3, 2];
    const result = sortPermutation(nums);
    expect(result).toEqual(2);
  });

  it("sortPermutation should return 0 for nums = [3,2,1,0]", () => {
    const nums = [3, 2, 1, 0];
    const result = sortPermutation(nums);
    expect(result).toEqual(0);
  });
});
