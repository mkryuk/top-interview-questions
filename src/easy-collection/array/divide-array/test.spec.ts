import { divideArray } from "./solution";

describe("Divide Array Into Equal Pairs", () => {
  it("divideArray should return true for nums = [3,2,3,2,2,2]", () => {
    const nums = [3, 2, 3, 2, 2, 2];
    const result = divideArray(nums);
    expect(result).toBeTrue();
  });

  it("divideArray should return false for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = divideArray(nums);
    expect(result).toBeFalse();
  });
});
