import { dailyTemperatures } from "./solution";

describe("Daily Temperatures:", () => {
  it("dailyTemperatures should return [1,1,4,2,1,1,0,0] temperatures = [73,74,75,71,69,72,76,73]", () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it("dailyTemperatures should return [1,1,1,0] temperatures = [30,40,50,60]", () => {
    const temperatures = [30, 40, 50, 60];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([1, 1, 1, 0]);
  });

  it("dailyTemperatures should return [1,1,0] temperatures = [30,60,90]", () => {
    const temperatures = [30, 60, 90];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([1, 1, 0]);
  });
});
