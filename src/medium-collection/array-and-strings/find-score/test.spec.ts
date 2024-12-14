import { findScore } from "./solution";

describe("Find Score of an Array After Marking All Elements", () => {
  it("findScore should return 7 for nums = [2,1,3,4,5,2]", () => {
    const nums = [2, 1, 3, 4, 5, 2];
    const result = findScore(nums);
    expect(result).toEqual(7);
  });

  it("findScore should return 5 for nums = [2,3,5,1,3,2]", () => {
    const nums = [2, 3, 5, 1, 3, 2];
    const result = findScore(nums);
    expect(result).toEqual(5);
  });
});
