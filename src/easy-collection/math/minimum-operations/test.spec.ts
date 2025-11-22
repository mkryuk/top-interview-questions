import { minimumOperations } from "./solution";

describe("3190. Find Minimum Operations to Make All Elements Divisible by Three", () => {
  it("minimumOperations should return 3 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = minimumOperations(nums);
    expect(result).toEqual(3);
  });

  it("minimumOperations should return 0 for nums = [3,6,9]", () => {
    const nums = [3, 6, 9];
    const result = minimumOperations(nums);
    expect(result).toEqual(0);
  });
});
