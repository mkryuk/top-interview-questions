import { smallestNumber } from "./solution";

describe("3370. Smallest Number With All Set Bits", () => {
  it("smallestNumber should return 7 for n = 5", () => {
    const n = 5;
    const result = smallestNumber(n);
    expect(result).toEqual(7);
  });

  it("smallestNumber should return 15 for n = 10", () => {
    const n = 10;
    const result = smallestNumber(n);
    expect(result).toEqual(15);
  });

  it("smallestNumber should return 3 for n = 3", () => {
    const n = 3;
    const result = smallestNumber(n);
    expect(result).toEqual(3);
  });
});
