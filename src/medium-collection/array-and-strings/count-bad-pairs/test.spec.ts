import { countBadPairs } from "./solution";

describe("Count Number of Bad Pairs", () => {
  it("countBadPairs should return 5 for nums = [4,1,3,3]", () => {
    const nums = [4, 1, 3, 3];
    const result = countBadPairs(nums);
    expect(result).toEqual(5);
  });

  it("countBadPairs should return 0 for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = countBadPairs(nums);
    expect(result).toEqual(0);
  });
});
