import { maxAscendingSum } from "./solution";

describe("Maximum Ascending Subarray Sum", () => {
  it("maxAscendingSum should return 65 for nums = [10,20,30,5,10,50]", () => {
    const nums = [10, 20, 30, 5, 10, 50];
    const result = maxAscendingSum(nums);
    expect(result).toEqual(65);
  });

  it("maxAscendingSum should return 150 for nums = [10,20,30,40,50]", () => {
    const nums = [10, 20, 30, 40, 50];
    const result = maxAscendingSum(nums);
    expect(result).toEqual(150);
  });

  it("maxAscendingSum should return 33 for nums = [12,17,15,13,10,11,12]", () => {
    const nums = [12, 17, 15, 13, 10, 11, 12];
    const result = maxAscendingSum(nums);
    expect(result).toEqual(33);
  });
});
