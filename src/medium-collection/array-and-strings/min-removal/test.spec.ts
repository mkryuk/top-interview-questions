import { minRemoval } from "./solution";

describe("3634. Minimum Removals to Balance Array", () => {
  it("minRemoval should return 1 for nums = [2,1,5], k = 2", () => {
    const nums = [2, 1, 5];
    const k = 2;
    const result = minRemoval(nums, k);
    expect(result).toEqual(1);
  });

  it("minRemoval should return 2 for nums = [1,6,2,9], k = 3", () => {
    const nums = [1, 6, 2, 9];
    const k = 3;
    const result = minRemoval(nums, k);
    expect(result).toEqual(2);
  });

  it("minRemoval should return 0 for nums = [4,6], k = 2", () => {
    const nums = [4, 6];
    const k = 2;
    const result = minRemoval(nums, k);
    expect(result).toEqual(0);
  });
});
