import { constructTransformedArray } from "./solution";

describe("3379. Transformed Array", () => {
  it("constructTransformedArray should return [1,1,1,3] for nums = [3,-2,1,1]", () => {
    const nums = [3, -2, 1, 1];
    const result = constructTransformedArray(nums);
    expect(result).toEqual([1, 1, 1, 3]);
  });

  it("constructTransformedArray should return [-1,-1,4] for nums = [-1,4,-1]", () => {
    const nums = [-1, 4, -1];
    const result = constructTransformedArray(nums);
    expect(result).toEqual([-1, -1, 4]);
  });
});
