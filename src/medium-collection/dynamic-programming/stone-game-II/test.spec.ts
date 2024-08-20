import { stoneGameII } from "./solution";

describe("Stone Game II", () => {
  it("stoneGameII should return 10 for piles = [2,7,9,4,4]", () => {
    const piles = [2, 7, 9, 4, 4];
    const result = stoneGameII(piles);
    expect(result).toEqual(10);
  });

  it("stoneGameII should return 104 for piles = [1,2,3,4,5,100]", () => {
    const piles = [1, 2, 3, 4, 5, 100];
    const result = stoneGameII(piles);
    expect(result).toEqual(104);
  });
});
