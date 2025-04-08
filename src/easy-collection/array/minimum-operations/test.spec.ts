import { minimumOperations } from "./solution";

describe("Minimum Number of Operations to Make Elements in Array Distinct", () => {
  it("minimumOperations should return 2 for nums = [1,2,3,4,2,3,3,5,7]", () => {
    const nums = [1, 2, 3, 4, 2, 3, 3, 5, 7];
    const result = minimumOperations(nums);
    expect(result).toEqual(2);
  });

  it("minimumOperations should return 2 for nums = [4,5,6,4,4]", () => {
    const nums = [4, 5, 6, 4, 4];
    const result = minimumOperations(nums);
    expect(result).toEqual(2);
  });

  it("minimumOperations should return 0 for nums = [6,7,8,9]", () => {
    const nums = [6, 7, 8, 9];
    const result = minimumOperations(nums);
    expect(result).toEqual(0);
  });

  it("minimumOperations should return 1 for nums = [2,7,15,1,15]", () => {
    const nums = [2, 7, 15, 1, 15];
    const result = minimumOperations(nums);
    expect(result).toEqual(1);
  });

  it("minimumOperations should return 1 for nums = [5,5]", () => {
    const nums = [5, 5];
    const result = minimumOperations(nums);
    expect(result).toEqual(1);
  });
});
