import { stoneGame } from "./solution";

describe("877. Stone Game:", () => {
  it("stoneGame should return true for piles = [5,3,4,5]", () => {
    const piles = [5, 3, 4, 5];
    const result = stoneGame(piles);
    expect(result).toEqual(true);
  });

  it("stoneGame should return true for piles = [3,7,2,3]", () => {
    const piles = [3, 7, 2, 3];
    const result = stoneGame(piles);
    expect(result).toEqual(true);
  });
});
