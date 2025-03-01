import { applyOperations } from "./solution";

describe("Apply Operations to an Array", () => {
  it("applyOperations should return [1,4,2,0,0,0] for nums = [1,2,2,1,1,0]", () => {
    const nums = [1, 2, 2, 1, 1, 0];
    const result = applyOperations(nums);
    expect(result).toEqual([1, 4, 2, 0, 0, 0]);
  });

  it("applyOperations should return [1,0] for nums = [0,1]", () => {
    const nums = [0, 1];
    const result = applyOperations(nums);
    expect(result).toEqual([1, 0]);
  });
});
