import { sortedSquares } from "./solution";

describe("Squares of a Sorted Array:", () => {
  it("sortedSquares should return [0,1,9,16,100] for nums = [-4,-1,0,3,10]", () => {
    const nums = [-4, -1, 0, 3, 10];
    const result = sortedSquares(nums);
    expect(result).toEqual([0, 1, 9, 16, 100]);
  });

  it("sortedSquares should return [4,9,9,49,121] for nums = [-7,-3,2,3,11]", () => {
    const nums = [-7, -3, 2, 3, 11];
    const result = sortedSquares(nums);
    expect(result).toEqual([4, 9, 9, 49, 121]);
  });
});
