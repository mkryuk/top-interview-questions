import { maxBottlesDrunk } from "./solution";

describe("3100. Water Bottles II", () => {
  it("maxBottlesDrunk should return 15 for numBottles = 13, numExchange = 6", () => {
    const numBottles = 13;
    const numExchange = 6;
    const result = maxBottlesDrunk(numBottles, numExchange);
    expect(result).toEqual(15);
  });

  it("maxBottlesDrunk should return 13 for numBottles = 10, numExchange = 3", () => {
    const numBottles = 10;
    const numExchange = 3;
    const result = maxBottlesDrunk(numBottles, numExchange);
    expect(result).toEqual(13);
  });
});
