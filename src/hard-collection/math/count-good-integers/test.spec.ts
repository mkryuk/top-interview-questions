import { countGoodIntegers } from "./solution";

describe("Find the Count of Good Integers", () => {
  it("countGoodIntegers should return 27 for n = 3, k = 5", () => {
    const n = 3;
    const k = 5;
    const result = countGoodIntegers(n, k);
    expect(result).toEqual(27);
  });

  it("countGoodIntegers should return 2 for n = 1, k = 4", () => {
    const n = 1;
    const k = 4;
    const result = countGoodIntegers(n, k);
    expect(result).toEqual(2);
  });

  it("countGoodIntegers should return 2468 for n = 5, k = 6", () => {
    const n = 5;
    const k = 6;
    const result = countGoodIntegers(n, k);
    expect(result).toEqual(2468);
  });
});
