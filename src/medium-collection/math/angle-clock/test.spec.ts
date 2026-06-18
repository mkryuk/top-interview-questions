import { angleClock } from "./solution";

describe("1344. Angle Between Hands of a Clock:", () => {
  it("angleClock should return 165 for hour = 12, minutes = 30", () => {
    const result = angleClock(12, 30);
    expect(result).toEqual(165);
  });

  it("angleClock should return 75 for hour = 3, minutes = 30", () => {
    const result = angleClock(3, 30);
    expect(result).toEqual(75);
  });

  it("angleClock should return 7.5 for hour = 3, minutes = 15", () => {
    const result = angleClock(3, 15);
    expect(result).toEqual(7.5);
  });
});
