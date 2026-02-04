import { maxSumTrionic } from "./solution";

describe("3640. Trionic Array II", () => {
  it("maxSumTrionic should return -4 for nums = [0,-2,-1,-3,0,2,-1]", () => {
    const nums = [0, -2, -1, -3, 0, 2, -1];
    const result = maxSumTrionic(nums);
    expect(result).toEqual(-4);
  });

  it("maxSumTrionic should return 14 for nums = [1,4,2,7]", () => {
    const nums = [1, 4, 2, 7];
    const result = maxSumTrionic(nums);
    expect(result).toEqual(14);
  });
});
