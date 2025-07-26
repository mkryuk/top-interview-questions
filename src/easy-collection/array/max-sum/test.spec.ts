import { maxSum } from "./solution";

describe("3487. Maximum Unique Subarray Sum After Deletion", () => {
  it("maxSum should return 15 for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = maxSum(nums);
    expect(result).toEqual(15);
  });

  it("maxSum should return 1 for nums = [1,1,0,1,1]", () => {
    const nums = [1, 1, 0, 1, 1];
    const result = maxSum(nums);
    expect(result).toEqual(1);
  });

  it("maxSum should return 3 for nums = [1,2,-1,-2,1,0,-1]", () => {
    const nums = [1, 2, -1, -2, 1, 0, -1];
    const result = maxSum(nums);
    expect(result).toEqual(3);
  });

  it("maxSum should return 20 for nums = [-20,20]", () => {
    const nums = [-20, 20];
    const result = maxSum(nums);
    expect(result).toEqual(20);
  });

  it("maxSum should return 15 for nums = [-1,-2,-3,-4,-5]", () => {
    const nums = [-1, -2, -3, -4, -5];
    const result = maxSum(nums);
    expect(result).toEqual(-1);
  });
});
