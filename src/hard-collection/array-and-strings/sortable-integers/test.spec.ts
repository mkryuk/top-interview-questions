import { sortableIntegers } from "./solution";

describe("3886. Sum of Sortable Integers:", () => {
  it("sortableIntegers should return 3 for nums = [3,1,2]", () => {
    const nums = [3, 1, 2];
    const result = sortableIntegers(nums);
    expect(result).toEqual(3);
  });

  it("sortableIntegers should return 0 for nums = [7,6,5]", () => {
    const nums = [7, 6, 5];
    const result = sortableIntegers(nums);
    expect(result).toEqual(0);
  });

  it("sortableIntegers should return 3 for nums = [5,8]", () => {
    const nums = [5, 8];
    const result = sortableIntegers(nums);
    expect(result).toEqual(3);
  });
});
