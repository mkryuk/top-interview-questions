import { successfulPairs } from "./solution";

describe("2300. Successful Pairs of Spells and Potions", () => {
  it("successfulPairs should return [4,0,3] for spells = [5,1,3], potions = [1,2,3,4,5], success = 7", () => {
    const spells = [5, 1, 3];
    const potions = [1, 2, 3, 4, 5];
    const success = 7;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([4, 0, 3]);
  });

  it("successfulPairs should return [2,0,2] for spells = [3,1,2], potions = [8,5,8], success = 16", () => {
    const spells = [3, 1, 2];
    const potions = [8, 5, 8];
    const success = 16;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([2, 0, 2]);
  });
});
