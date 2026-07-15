import { gcdOfOddEvenSums } from "./solution";

describe("3658. GCD of Odd and Even Sums:", () => {
  it("gcdOfOddEvenSums should return 4 for n = 4", () => {
    const n = 4;
    const result = gcdOfOddEvenSums(n);
    expect(result).toEqual(4);
  });

  it("gcdOfOddEvenSums should return 5 for n = 5", () => {
    const n = 5;
    const result = gcdOfOddEvenSums(n);
    expect(result).toEqual(5);
  });
});
