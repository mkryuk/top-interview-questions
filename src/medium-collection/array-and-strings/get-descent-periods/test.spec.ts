import { getDescentPeriods } from "./solution";

describe("2110. Number of Smooth Descent Periods of a Stock", () => {
  it("getDescentPeriods should return 7 for prices = [3,2,1,4]", () => {
    const prices = [3, 2, 1, 4];
    const result = getDescentPeriods(prices);
    expect(result).toEqual(7);
  });

  it("getDescentPeriods should return 4 for prices = [8,6,7,7]", () => {
    const prices = [8, 6, 7, 7];
    const result = getDescentPeriods(prices);
    expect(result).toEqual(4);
  });

  it("getDescentPeriods should return 1 for prices = [1]", () => {
    const prices = [1];
    const result = getDescentPeriods(prices);
    expect(result).toEqual(1);
  });
});
