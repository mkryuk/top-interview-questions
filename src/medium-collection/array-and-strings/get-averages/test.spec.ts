import { getAverages } from "./solution";

describe("K Radius Subarray Averages:", () => {
  it("getAverages should return [-1,-1,-1,5,4,4,-1,-1,-1] for nums = [7,4,3,9,1,8,5,2,6], k = 3", () => {
    const nums = [7, 4, 3, 9, 1, 8, 5, 2, 6];
    const k = 3;
    const result = getAverages(nums, k);
    expect(result).toEqual([-1, -1, -1, 5, 4, 4, -1, -1, -1]);
  });

  it("getAverages should return [100000] for nums = [100000], k = 0", () => {
    const nums = [100000];
    const k = 0;
    const result = getAverages(nums, k);
    expect(result).toEqual([100000]);
  });

  it("getAverages should return [-1]for nums = [8], k = 100000", () => {
    const nums = [8];
    const k = 100000;
    const result = getAverages(nums, k);
    expect(result).toEqual([-1]);
  });
});
