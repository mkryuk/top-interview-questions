import { reductionOperations } from "./solution";

describe("Reduction Operations to Make the Array Elements Equal:", () => {
  it("reductionOperations should return 3 for nums = [5,1,3]", () => {
    const nums = [5, 1, 3];
    const result = reductionOperations(nums);
    expect(result).toEqual(3);
  });

  it("reductionOperations should return 0 for nums = [1,1,1]", () => {
    const nums = [1, 1, 1];
    const result = reductionOperations(nums);
    expect(result).toEqual(0);
  });

  it("reductionOperations should return 4 for nums = [1,1,2,2,3]", () => {
    const nums = [1, 1, 2, 2, 3];
    const result = reductionOperations(nums);
    expect(result).toEqual(4);
  });
});
