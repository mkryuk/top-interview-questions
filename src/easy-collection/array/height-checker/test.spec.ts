import { heightChecker } from "./solution";

describe("Height Checker", () => {
  it("heightChecker should return 3 for heights = [1,1,4,2,1,3]", () => {
    const heights = [1, 1, 4, 2, 1, 3];
    const result = heightChecker(heights);
    expect(result).toEqual(3);
  });

  it("heightChecker should return 5 for heights = [5,1,2,3,4]", () => {
    const heights = [5, 1, 2, 3, 4];
    const result = heightChecker(heights);
    expect(result).toEqual(5);
  });

  it("heightChecker should return 0 for heights = [1,2,3,4,5]", () => {
    const heights = [1, 2, 3, 4, 5];
    const result = heightChecker(heights);
    expect(result).toEqual(0);
  });
});
