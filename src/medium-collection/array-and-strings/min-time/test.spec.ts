import { minTime } from "./solution";

describe("3494. Find the Minimum Amount of Time to Brew Potions", () => {
  it("minTime should return 110 for skill = [1,5,2,4], mana = [5,1,4,2]", () => {
    const skill = [1, 5, 2, 4];
    const mana = [5, 1, 4, 2];
    const result = minTime(skill, mana);
    expect(result).toEqual(110);
  });

  it("minTime should return 5 for skill = [1,1,1], mana = [1,1,1]", () => {
    const skill = [1, 1, 1];
    const mana = [1, 1, 1];
    const result = minTime(skill, mana);
    expect(result).toEqual(5);
  });

  it("minTime should return 21 for skill = [1,2,3,4], mana = [1,2]", () => {
    const skill = [1, 2, 3, 4];
    const mana = [1, 2];
    const result = minTime(skill, mana);
    expect(result).toEqual(21);
  });
});
