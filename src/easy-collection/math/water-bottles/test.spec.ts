import { numWaterBottles } from "./solution";

describe("Water Bottles:", () => {
  it("numWaterBottles should return 13 for numBottles = 9, numExchange = 3", () => {
    const numBottles = 9;
    const numExchange = 3;
    const result = numWaterBottles(numBottles, numExchange);
    expect(result).toEqual(13);
  });

  it("numWaterBottles should return 19 for numBottles = 15, numExchange = 4", () => {
    const numBottles = 15;
    const numExchange = 4;
    const result = numWaterBottles(numBottles, numExchange);
    expect(result).toEqual(19);
  });
});
