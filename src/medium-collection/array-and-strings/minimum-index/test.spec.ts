import { minimumIndex } from "./solution";

describe("Minimum Index of a Valid Split", () => {
  it("minimumIndex should return 2 for nums = [1,2,2,2]", () => {
    const nums = [1, 2, 2, 2];
    const result = minimumIndex(nums);
    expect(result).toEqual(2);
  });

  it("minimumIndex should return 4 for nums = [2,1,3,1,1,1,7,1,2,1]", () => {
    const nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1];
    const result = minimumIndex(nums);
    expect(result).toEqual(4);
  });

  it("minimumIndex should return -1 for nums = [3,3,3,3,7,2,2]", () => {
    const nums = [3, 3, 3, 3, 7, 2, 2];
    const result = minimumIndex(nums);
    expect(result).toEqual(-1);
  });

  it("minimumIndex should return -1 for nums = [9,5,5,1,1,1,1,8,1]", () => {
    const nums = [9, 5, 5, 1, 1, 1, 1, 8, 1];
    const result = minimumIndex(nums);
    expect(result).toEqual(-1);
  });
});
