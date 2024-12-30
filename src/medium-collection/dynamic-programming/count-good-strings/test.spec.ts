import { countGoodStrings } from "./solution";

describe("Count Ways To Build Good Strings", () => {
  it("countGoodStrings should return 8 for low = 3, high = 3, zero = 1, one = 1", () => {
    const low = 3;
    const high = 3;
    const zero = 1;
    const one = 1;
    const result = countGoodStrings(low, high, zero, one);
    expect(result).toEqual(8);
  });

  it("countGoodStrings should return 5 for low = 2, high = 3, zero = 1, one = 2", () => {
    const low = 2;
    const high = 3;
    const zero = 1;
    const one = 2;
    const result = countGoodStrings(low, high, zero, one);
    expect(result).toEqual(5);
  });
});
