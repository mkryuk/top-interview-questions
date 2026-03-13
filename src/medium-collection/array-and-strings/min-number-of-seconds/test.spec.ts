import { minNumberOfSeconds } from "./solution";

describe("Minimum Number of Seconds to Make Mountain Height Zero", () => {
  it("minNumberOfSeconds should return 3 for mountainHeight = 4, workerTimes = [2,1,1]", () => {
    const mountainHeight = 4;
    const workerTimes = [2, 1, 1];
    const result = minNumberOfSeconds(mountainHeight, workerTimes);
    expect(result).toEqual(3);
  });

  it("minNumberOfSeconds should return 12 for mountainHeight = 10, workerTimes = [3,2,2,4]", () => {
    const mountainHeight = 10;
    const workerTimes = [3, 2, 2, 4];
    const result = minNumberOfSeconds(mountainHeight, workerTimes);
    expect(result).toEqual(12);
  });

  it("minNumberOfSeconds should return 15 for mountainHeight = 5, workerTimes = [1]", () => {
    const mountainHeight = 5;
    const workerTimes = [1];
    const result = minNumberOfSeconds(mountainHeight, workerTimes);
    expect(result).toEqual(15);
  });
});
