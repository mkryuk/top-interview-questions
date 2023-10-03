import { numIdenticalPairs } from "./solution";

describe("Number of Good Pairs:", () => {
  it("numIdenticalPairs should return 4 for nums = [1,2,3,1,1,3]", () => {
    const nums = [1, 2, 3, 1, 1, 3];
    const result = numIdenticalPairs(nums);
    expect(result).toEqual(4);
  });

  it("numIdenticalPairs should return 6 for nums = [1,1,1,1]", () => {
    const nums = [1, 1, 1, 1];
    const result = numIdenticalPairs(nums);
    expect(result).toEqual(6);
  });

  it("numIdenticalPairs should return 0 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = numIdenticalPairs(nums);
    expect(result).toEqual(0);
  });
});
