import { maximumEnergy } from "./solution";

describe("3147. Taking Maximum Energy From the Mystic Dungeon ", () => {
  it("maximumEnergy should return 3 for energy = [5,2,-10,-5,1], k = 3", () => {
    const energy = [5, 2, -10, -5, 1];
    const k = 3;
    const result = maximumEnergy(energy, k);
    expect(result).toEqual(3);
  });

  it("maximumEnergy should return -1 for energy = [-2,-3,-1], k = 2", () => {
    const energy = [-2, -3, -1];
    const k = 2;
    const result = maximumEnergy(energy, k);
    expect(result).toEqual(-1);
  });
});
