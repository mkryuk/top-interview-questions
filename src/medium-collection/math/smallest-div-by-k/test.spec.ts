import { smallestRepunitDivByK } from "./solution";

describe("1015. Smallest Integer Divisible by K", () => {
  it("smallestRepunitDivByK should return 1 for k = 1", () => {
    const k = 1;
    const result = smallestRepunitDivByK(k);
    expect(result).toEqual(1);
  });

  it("smallestRepunitDivByK should return -1 for k = 2", () => {
    const k = 2;
    const result = smallestRepunitDivByK(k);
    expect(result).toEqual(-1);
  });

  it("smallestRepunitDivByK should return 3 for k = 3", () => {
    const k = 3;
    const result = smallestRepunitDivByK(k);
    expect(result).toEqual(3);
  });
});
