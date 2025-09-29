import { largestPerimeter } from "./solution";

describe("976. Largest Perimeter Triangle", () => {
  it("largestPerimeter should return 5 for nums = [2,1,2]", () => {
    const nums = [2, 1, 2];
    const result = largestPerimeter(nums);
    expect(result).toEqual(5);
  });

  it("largestPerimeter should return 0 for nums = [1,2,1,10]", () => {
    const nums = [1, 2, 1, 10];
    const result = largestPerimeter(nums);
    expect(result).toEqual(0);
  });
});
