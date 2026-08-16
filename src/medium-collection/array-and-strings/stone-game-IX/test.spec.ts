import { stoneGameIX } from "./solution";

describe("2029. Stone Game IX:", () => {
  it("stoneGameIX should return true for stones = [2,1]", () => {
    const stones = [2, 1];
    const result = stoneGameIX(stones);
    expect(result).toEqual(true);
  });

  it("stoneGameIX should return false for stones = [2]", () => {
    const stones = [2];
    const result = stoneGameIX(stones);
    expect(result).toEqual(false);
  });

  it("stoneGameIX should return false for stones = [5,1,2,4,3]", () => {
    const stones = [5, 1, 2, 4, 3];
    const result = stoneGameIX(stones);
    expect(result).toEqual(false);
  });
});
