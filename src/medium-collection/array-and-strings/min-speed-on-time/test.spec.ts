import { minSpeedOnTime } from "./solution";

describe("Minimum Speed to Arrive on Time:", () => {
  it("minSpeedOnTime should return 1 for dist = [1,3,2], hour = 6", () => {
    const dist = [1, 3, 2];
    const hour = 6;
    const result = minSpeedOnTime(dist, hour);
    expect(result).toEqual(1);
  });

  it("minSpeedOnTime should return 1 for dist = [1,3,2], hour = 2.7", () => {
    const dist = [1, 3, 2];
    const hour = 2.7;
    const result = minSpeedOnTime(dist, hour);
    expect(result).toEqual(3);
  });

  it("minSpeedOnTime should return -1 for dist = [1,3,2], hour = 1.9", () => {
    const dist = [1, 3, 2];
    const hour = 1.9;
    const result = minSpeedOnTime(dist, hour);
    expect(result).toEqual(-1);
  });

  it("minSpeedOnTime should return 10000000 for dist = [1,1,100000], hour = 2.01", () => {
    const dist = [1, 1, 100000];
    const hour = 2.01;
    const result = minSpeedOnTime(dist, hour);
    expect(result).toEqual(10000000);
  });
});
