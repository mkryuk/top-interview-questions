import { minCost } from "./solution";

describe("1578. Minimum Time to Make Rope Colorful:", () => {
  it('minCost should return 3 for colors = "abaac", neededTime = [1,2,3,4,5]', () => {
    const colors = "abaac";
    const neededTime = [1, 2, 3, 4, 5];
    const result = minCost(colors, neededTime);
    expect(result).toEqual(3);
  });

  it('minCost should return 0 for colors = "abc", neededTime = [1,2,3]', () => {
    const colors = "abc";
    const neededTime = [1, 2, 3];
    const result = minCost(colors, neededTime);
    expect(result).toEqual(0);
  });

  it('minCost should return 2 for colors = "aabaa", neededTime = [1,2,3,4,1]', () => {
    const colors = "aabaa";
    const neededTime = [1, 2, 3, 4, 1];
    const result = minCost(colors, neededTime);
    expect(result).toEqual(2);
  });
});
