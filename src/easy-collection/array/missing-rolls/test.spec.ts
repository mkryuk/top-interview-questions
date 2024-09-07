import { missingRolls } from "./solution";

describe("Find Missing Observations", () => {
  it("missingRolls should return [6,6] for rolls = [3,2,4,3], mean = 4, n = 2", () => {
    const rolls = [3, 2, 4, 3];
    const mean = 4;
    const n = 2;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([6, 6]);
  });

  it("missingRolls should return [6,1,1,1] for rolls = [1,5,6], mean = 3, n = 4", () => {
    const rolls = [1, 5, 6];
    const mean = 3;
    const n = 4;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([6, 1, 1, 1]);
  });

  it("missingRolls should return [] for rolls = [1,2,3,4], mean = 6, n = 4", () => {
    const rolls = [1, 2, 3, 4];
    const mean = 6;
    const n = 4;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([]);
  });

  it("missingRolls should return [] for rolls = [4,2,2,5,4,5,4,5,3,3,6,1,2,4,2,1,6,5,4,2,3,4,2,3,3,5,4,1,4,4,5,3,6,1,5,2,3,3,6,1,6,4,1,3], mean = 2, n = 53", () => {
    const rolls = [
      4, 2, 2, 5, 4, 5, 4, 5, 3, 3, 6, 1, 2, 4, 2, 1, 6, 5, 4, 2, 3, 4, 2, 3, 3, 5, 4, 1, 4, 4, 5, 3, 6, 1, 5, 2, 3, 3,
      6, 1, 6, 4, 1, 3,
    ];
    const mean = 2;
    const n = 53;
    const result = missingRolls(rolls, mean, n);
    expect(result).toEqual([]);
  });
});
