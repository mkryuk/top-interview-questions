import { minimumDistance } from "./solution";

describe("Minimum Distance Between Three Equal Elements II", () => {
  it("minimumDistance should return 6 for nums = [1,2,1,1,3]", () => {
    const nums = [1, 2, 1, 1, 3];
    const result = minimumDistance(nums);
    expect(result).toEqual(6);
  });

  it("minimumDistance should return 8 for nums = [1,1,2,3,2,1,2]", () => {
    const nums = [1, 1, 2, 3, 2, 1, 2];
    const result = minimumDistance(nums);
    expect(result).toEqual(8);
  });

  it("minimumDistance should return -1 for nums = [1]", () => {
    const nums = [1];
    const result = minimumDistance(nums);
    expect(result).toEqual(-1);
  });
});
