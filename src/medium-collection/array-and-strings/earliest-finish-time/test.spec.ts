import { earliestFinishTime } from "./solution";

describe("3635. Earliest Finish Time for Land and Water Rides II:", () => {
  it("earliestFinishTime should return 9 for landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]", () => {
    const landStartTime = [2, 8];
    const landDuration = [4, 1];
    const waterStartTime = [6];
    const waterDuration = [3];
    const result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
    expect(result).toEqual(9);
  });

  it("earliestFinishTime should return 14 for landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]", () => {
    const landStartTime = [5];
    const landDuration = [3];
    const waterStartTime = [1];
    const waterDuration = [10];
    const result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
    expect(result).toEqual(14);
  });
});
