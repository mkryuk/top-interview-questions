import { sumCounts } from "./solution";

describe("2913. Subarrays Distinct Element Sum of Squares I:", () => {
  it("sumCounts should return 15 for nums = [1,2,1]", () => {
    const nums = [1, 2, 1];
    const result = sumCounts(nums);
    expect(result).toEqual(15);
  });

  it("sumCounts should return 3 for nums = [1,1]", () => {
    const nums = [1, 1];
    const result = sumCounts(nums);
    expect(result).toEqual(3);
  });
});
