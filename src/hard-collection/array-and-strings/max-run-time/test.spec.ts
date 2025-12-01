import { maxRunTime } from "./solution";

describe("2141. Maximum Running Time of N Computers", () => {
  it("maxRunTime should return 4 for n = 2, batteries = [3,3,3]", () => {
    const n = 2;
    const batteries = [3, 3, 3];
    const result = maxRunTime(n, batteries);
    expect(result).toEqual(4);
  });

  it("maxRunTime should return 2 for n = 2, batteries = [1,1,1,1]", () => {
    const n = 2;
    const batteries = [1, 1, 1, 1];
    const result = maxRunTime(n, batteries);
    expect(result).toEqual(2);
  });
});
