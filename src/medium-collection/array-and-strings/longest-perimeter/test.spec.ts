import { largestPerimeter } from "./solution";

describe("Find Polygon With the Largest Perimeter:", () => {
  it("largestPerimeter should return 15 for nums = [5,5,5]", () => {
    const nums = [5, 5, 5];
    const result = largestPerimeter(nums);
    expect(result).toEqual(15);
  });

  it("largestPerimeter should return 12 for nums = [1,12,1,2,5,50,3]", () => {
    const nums = [1, 12, 1, 2, 5, 50, 3];
    const result = largestPerimeter(nums);
    expect(result).toEqual(12);
  });

  it("largestPerimeter should return -1 for nums = [5,5,50]", () => {
    const nums = [5, 5, 50];
    const result = largestPerimeter(nums);
    expect(result).toEqual(-1);
  });
});
