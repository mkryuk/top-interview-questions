import { maximumTotalDamage } from "./solution";

describe("3186. Maximum Total Damage With Spell Casting", () => {
  it("maximumTotalDamage should return 6 for power = [1,1,3,4]", () => {
    const power = [1, 1, 3, 4];
    const result = maximumTotalDamage(power);
    expect(result).toEqual(6);
  });

  it("maximumTotalDamage should return 13 for power = [7,1,6,6]", () => {
    const power = [7, 1, 6, 6];
    const result = maximumTotalDamage(power);
    expect(result).toEqual(13);
  });
});
