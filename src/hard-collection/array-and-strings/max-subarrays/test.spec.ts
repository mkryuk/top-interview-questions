import { maxSubarrays } from "./solution";

describe("3480. Maximize Subarrays After Removing One Conflicting Pair", () => {
  it("maxSubarrays should return 9 for n = 4, conflictingPairs = [[2,3],[1,4]]", () => {
    const n = 4;
    const conflictingPairs = [
      [2, 3],
      [1, 4],
    ];
    const result = maxSubarrays(n, conflictingPairs);
    expect(result).toEqual(9);
  });

  it("maxSubarrays should return 12 for n = 5, conflictingPairs = [[1,2],[2,5],[3,5]]", () => {
    const n = 5;
    const conflictingPairs = [
      [1, 2],
      [2, 5],
      [3, 5],
    ];
    const result = maxSubarrays(n, conflictingPairs);
    expect(result).toEqual(12);
  });
});
