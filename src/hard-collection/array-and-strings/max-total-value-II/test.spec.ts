import { maxTotalValue } from "./solution";

describe("3691. Maximum Total Subarray Value II:", () => {
  it("maxTotalValue should return 4 for nums = [1,3,2], k = 2", () => {
    const nums = [1, 3, 2];
    const k = 2;
    const result = maxTotalValue(nums, k);
    expect(result).toEqual(4);
  });

  it("maxTotalValue should return 12 for nums = [4,2,5,1], k = 3", () => {
    const nums = [4, 2, 5, 1];
    const k = 3;
    const result = maxTotalValue(nums, k);
    expect(result).toEqual(12);
  });
});
