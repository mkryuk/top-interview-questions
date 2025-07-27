import { countHillValley } from "./solution";

describe("2210. Count Hills and Valleys in an Array", () => {
  it("countHillValley should return 3 for nums = [2,4,1,1,6,5]", () => {
    const nums = [2, 4, 1, 1, 6, 5];
    const result = countHillValley(nums);
    expect(result).toEqual(3);
  });

  it("countHillValley should return 0 for nums = [6,6,5,5,4,1]", () => {
    const nums = [6, 6, 5, 5, 4, 1];
    const result = countHillValley(nums);
    expect(result).toEqual(0);
  });
});
