import { countPrimeSetBits } from "./solution";

describe("Prime Number of Set Bits in Binary Representation", () => {
  it("countPrimeSetBits should return 4 for left = 6, right = 10", () => {
    const left = 6;
    const right = 10;
    const result = countPrimeSetBits(left, right);
    expect(result).toEqual(4);
  });

  it("countPrimeSetBits should return 5 for left = 10, right = 15", () => {
    const left = 10;
    const right = 15;
    const result = countPrimeSetBits(left, right);
    expect(result).toEqual(5);
  });
});
