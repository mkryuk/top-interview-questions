import { numOfWays } from "./solution";

describe("1569. Number of Ways to Reorder Array to Get Same BST:", () => {
  it("numOfWays should return 1 for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = numOfWays(nums);
    expect(result).toEqual(1);
  });

  it("numOfWays should return 5 for nums = [3,4,5,1,2]", () => {
    const nums = [3, 4, 5, 1, 2];
    const result = numOfWays(nums);
    expect(result).toEqual(5);
  });

  it("numOfWays should return 0 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = numOfWays(nums);
    expect(result).toEqual(0);
  });
});
