import { countValidSelections } from "./solution";

describe("3354. Make Array Elements Equal to Zero", () => {
  it("countValidSelections should return 2 for nums = [1,0,2,0,3]", () => {
    const nums = [1, 0, 2, 0, 3];
    const result = countValidSelections(nums);
    expect(result).toEqual(2);
  });

  it("countValidSelections should return 0 for nums = [2,3,4,0,4,1,0]", () => {
    const nums = [2, 3, 4, 0, 4, 1, 0];
    const result = countValidSelections(nums);
    expect(result).toEqual(0);
  });
});
