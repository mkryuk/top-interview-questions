import { countPairs } from "./solution";

describe("Count Equal and Divisible Pairs in an Array", () => {
  it("countPairs should return 4 for nums = [3,1,2,2,2,1,3], k = 2", () => {
    const nums = [3, 1, 2, 2, 2, 1, 3];
    const k = 2;
    const result = countPairs(nums, k);
    expect(result).toEqual(4);
  });

  it("countPairs should return 0 for nums = [3,1,2,2,2,1,3], k = 2", () => {
    const nums = [1, 2, 3, 4];
    const k = 1;
    const result = countPairs(nums, k);
    expect(result).toEqual(0);
  });
});
