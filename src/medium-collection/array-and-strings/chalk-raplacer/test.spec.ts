import { chalkReplacer } from "./solution";

describe("Find the Student that Will Replace the Chalk", () => {
  it("chalkReplacer should return 0 for chalk = [5,1,5], k = 22", () => {
    const chalk = [5, 1, 5];
    const k = 22;
    const result = chalkReplacer(chalk, k);
    expect(result).toEqual(0);
  });

  it("chalkReplacer should return 1 for chalk = [3,4,1,2], k = 25", () => {
    const chalk = [3, 4, 1, 2];
    const k = 25;
    const result = chalkReplacer(chalk, k);
    expect(result).toEqual(1);
  });
});
