import { missingRolls } from "./solution";

describe("Find Missing Observations", () => {
  it("missingRolls should return [6,6] for rolls = [3,2,4,3], mean = 4, n = 2", () => {
    const rolls = [3, 2, 4, 3];
    const mean = 4;
    const n = 2;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([6, 6]);
  });

  it("missingRolls should return [2,3,2,2] for rolls = [1,5,6], mean = 3, n = 4", () => {
    const rolls = [1, 5, 6];
    const mean = 3;
    const n = 4;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([2, 3, 2, 2]);
  });

  it("missingRolls should return [] for rolls = [1,2,3,4], mean = 6, n = 4", () => {
    const rolls = [1, 2, 3, 4];
    const mean = 6;
    const n = 4;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([]);
  });
});
