import { stoneGameVIII } from "./solution";

describe("1872. Stone Game VIII:", () => {
  it("stoneGameVIII should return 5 for stones = [-1,2,-3,4,-5]", () => {
    const stones = [-1, 2, -3, 4, -5];
    const result = stoneGameVIII(stones);
    expect(result).toEqual(5);
  });

  it("stoneGameVIII should return 13 for stones = [7,-6,5,10,5,-2,-6]", () => {
    const stones = [7, -6, 5, 10, 5, -2, -6];
    const result = stoneGameVIII(stones);
    expect(result).toEqual(13);
  });

  it("stoneGameVIII should return -22 for stones = [-10,-12]", () => {
    const stones = [-10, -12];
    const result = stoneGameVIII(stones);
    expect(result).toEqual(-22);
  });
});
