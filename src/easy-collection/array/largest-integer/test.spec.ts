import { largestInteger } from "./solution";

describe("3471. Find the Largest Almost Missing Integer:", () => {
  it("largestInteger should return 7 for nums = [3,9,2,1,7], k = 3", () => {
    const nums = [3, 9, 2, 1, 7];
    const k = 3;
    const result = largestInteger(nums, k);
    expect(result).toEqual(7);
  });

  it("largestInteger should return 3 for nums = [3,9,7,2,1,7], k = 4", () => {
    const nums = [3, 9, 7, 2, 1, 7];
    const k = 4;
    const result = largestInteger(nums, k);
    expect(result).toEqual(3);
  });

  it("largestInteger should return -1 for nums = [0,0], k = 1", () => {
    const nums = [0, 0];
    const k = 1;
    const result = largestInteger(nums, k);
    expect(result).toEqual(-1);
  });
});
