import { leftRightDifference } from "./solution";

describe("2574. Left and Right Sum Differences:", () => {
  it("leftRightDifference should return [15,1,11,22] for nums = [10,4,8,3]", () => {
    const nums = [10, 4, 8, 3];
    const result = leftRightDifference(nums);
    expect(result).toEqual([15, 1, 11, 22]);
  });

  it("leftRightDifference should return [0] for nums = [1]", () => {
    const nums = [1];
    const result = leftRightDifference(nums);
    expect(result).toEqual([0]);
  });
});
