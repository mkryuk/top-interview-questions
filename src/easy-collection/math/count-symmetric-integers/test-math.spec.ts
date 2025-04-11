import { countSymmetricIntegers } from "./solution-math";

describe("Count Symmetric Integers", () => {
  it("countSymmetricIntegers should return 9 for low = 1, high = 100", () => {
    const low = 1;
    const high = 100;
    const result = countSymmetricIntegers(low, high);
    expect(result).toEqual(9);
  });

  it("countSymmetricIntegers should return 4 for low = 1200, high = 1230", () => {
    const low = 1200;
    const high = 1230;
    const result = countSymmetricIntegers(low, high);
    expect(result).toEqual(4);
  });
});
