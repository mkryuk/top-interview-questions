import { minDifficulty } from "./solution";

describe("Minimum Difficulty of a Job Schedule:", () => {
  it("minDifficulty should return 7 for jobDifficulty = [6,5,4,3,2,1], d = 2", () => {
    const jobDifficulty = [6, 5, 4, 3, 2, 1];
    const d = 2;
    const result = minDifficulty(jobDifficulty, d);
    expect(result).toEqual(7);
  });

  it("minDifficulty should return -1 for jobDifficulty = [9,9,9], d = 4", () => {
    const jobDifficulty = [9, 9, 9];
    const d = 4;
    const result = minDifficulty(jobDifficulty, d);
    expect(result).toEqual(-1);
  });

  it("minDifficulty should return 3 for jobDifficulty = [1,1,1], d = 3", () => {
    const jobDifficulty = [1, 1, 1];
    const d = 3;
    const result = minDifficulty(jobDifficulty, d);
    expect(result).toEqual(7);
  });
});
