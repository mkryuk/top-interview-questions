import { stoneGameV } from "./solution";

describe("1563. Stone Game V:", () => {
  it("stoneGameV should return 18 for stoneValue = [6,2,3,4,5,5]", () => {
    const stoneValue = [6, 2, 3, 4, 5, 5];
    const result = stoneGameV(stoneValue);
    expect(result).toEqual(18);
  });

  it("stoneGameV should return 28 for stoneValue = [7,7,7,7,7,7,7]", () => {
    const stoneValue = [7, 7, 7, 7, 7, 7, 7];
    const result = stoneGameV(stoneValue);
    expect(result).toEqual(28);
  });

  it("stoneGameV should return 0 for stoneValue = [4]", () => {
    const stoneValue = [4];
    const result = stoneGameV(stoneValue);
    expect(result).toEqual(0);
  });
});
