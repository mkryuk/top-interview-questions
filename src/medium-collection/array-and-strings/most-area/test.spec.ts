import { maxArea } from "./solution";

describe("11. Container With Most Water", () => {
  it("maxArea should return 49 for height = [1,8,6,2,5,4,8,3,7]", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
    expect(result).toEqual(49);
  });

  it("maxArea should return 1 for height = [1,1]", () => {
    const height = [1, 1];
    const result = maxArea(height);
    expect(result).toEqual(1);
  });
});
