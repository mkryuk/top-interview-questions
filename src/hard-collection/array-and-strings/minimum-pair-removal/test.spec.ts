import { minimumPairRemoval } from "./solution";

describe("3510. Minimum Pair Removal to Sort Array II", () => {
  it("minimumPairRemoval should return 2 for nums = [5,2,3,1]", () => {
    const nums = [5, 2, 3, 1];
    const result = minimumPairRemoval(nums);
    expect(result).toEqual(2);
  });

  it("minimumPairRemoval should return 0 for nums = [1,2,2]", () => {
    const nums = [1, 2, 2];
    const result = minimumPairRemoval(nums);
    expect(result).toEqual(0);
  });
});
