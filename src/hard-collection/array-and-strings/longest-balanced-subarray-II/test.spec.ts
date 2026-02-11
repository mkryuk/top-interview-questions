import { longestBalanced } from "./solution";

describe("Longest Balanced Subarray II", () => {
  it("longestBalanced should return 4 for nums = [2,5,4,3]", () => {
    const nums = [2, 5, 4, 3];
    const result = longestBalanced(nums);
    expect(result).toEqual(4);
  });

  it("longestBalanced should return 5 for nums = [3,2,2,5,4]", () => {
    const nums = [3, 2, 2, 5, 4];
    const result = longestBalanced(nums);
    expect(result).toEqual(5);
  });

  it("longestBalanced should return 3 for nums = [1,2,3,2]", () => {
    const nums = [1, 2, 3, 2];
    const result = longestBalanced(nums);
    expect(result).toEqual(3);
  });
});
