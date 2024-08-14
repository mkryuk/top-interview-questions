import { smallestDistancePair } from "./solution";

describe("Find K-th Smallest Pair Distance", () => {
  it("smallestDistancePair should return 0 for nums = [1,3,1], k = 1", () => {
    const nums = [1, 3, 1];
    const k = 1;
    const result = smallestDistancePair(nums, k);
    expect(result).toEqual(0);
  });

  it("smallestDistancePair should return 0 for nums = [1,1,1], k = 2", () => {
    const nums = [1, 1, 1];
    const k = 2;
    const result = smallestDistancePair(nums, k);
    expect(result).toEqual(0);
  });

  it("smallestDistancePair should return 5 for nums = [1,6,1], k = 3", () => {
    const nums = [1, 6, 1];
    const k = 3;
    const result = smallestDistancePair(nums, k);
    expect(result).toEqual(5);
  });
});
