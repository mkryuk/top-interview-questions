import { smallestNumber } from "./solution";

describe("3345. Smallest Divisible Digit Product I:", () => {
  it("smallestNumber should return 10 for n = 10 and t = 2", () => {
    const n = 10;
    const t = 2;
    const result = smallestNumber(n, t);
    expect(result).toEqual(10);
  });

  it("smallestNumber should return 16 for n = 15 and t = 3", () => {
    const n = 15;
    const t = 3;
    const result = smallestNumber(n, t);
    expect(result).toEqual(16);
  });
});
